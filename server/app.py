# initialize a flask restful app
from flask import request, session, jsonify, make_response
from flask_restful import Resource
from models import db, User, Review, Tab, TabData
from sqlalchemy import and_
from config import app, api, db

app.secret_key = b'kyushikiscool'

class CheckSession(Resource):
    def get(self):
        if not session.get('user_id'):
            return make_response(jsonify({'error' : "No user logged in"}), 401)
        user = User.query.filter(User.id == session.get('user_id')).first()
        if not user:
            return make_response(jsonify({'error' : "User not found"}), 401)
        user.all_tabs = []
        for t in Tab.query.filter(Tab.visibility == True).limit(8):
            if t.user_id != session.get('user_id'):
                user.all_tabs.append(t.to_dict())
        return make_response(jsonify(user.to_dict(only=('username', 'id', 'tabs', 'all_tabs'))), 200)
api.add_resource(CheckSession, '/check_session')

class Logout(Resource):
    def post(self):
        session['user_id'] = None
        return {}, 204
    
api.add_resource(Logout, '/logout')

class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(User.username == data['username']).first()
        if not user:
            return make_response(jsonify({'error' : "User not found"}), 401)
        if user.authenticate(data['password']):
            session['user_id'] = user.id
        return make_response(jsonify(user.to_dict(only=('username', 'id', 'tabs'))), 200)
    
api.add_resource(Login, '/login')

class Signup(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(User.username == data.get('username')).first()
        if user:
            return make_response(jsonify({'error': "Username already taken"}), 409)
        user = User(username=data['username'])
        user.password_hash = data['password']
        db.session.add(user)
        db.session.commit()
        session['user_id'] = user.id
        return make_response(jsonify(user.to_dict()), 201)
    
api.add_resource(Signup, '/signup')

class Reviews(Resource):
    def get(self, id):
        reviews = [r.to_dict() for r in Review.query.filter(Review.tab_id == id)]
        return make_response(jsonify(reviews), 200)
    
    def post(self, id):
        data = request.get_json()
        try:
            review = Review(user_id=session.get('user_id'), tab_id=id, text=data['text'], rating=data['rating'])
        except ValueError as e:
            return make_response(jsonify({'errors': [str(e)]}), 422)
        return make_response(jsonify(review.to_dict()), 201)
    
api.add_resource(Reviews, '/reviews/<int:id>')
    
class Tabs(Resource):
    def get(self):
        tabs = []
        for t in Tab.query.filter(Tab.visibility == True):
            if t.user_id != session.get('user_id'):
                tabs.append(t.to_dict())
        return make_response(jsonify(tabs), 200)
    
    def post(self):
        data = request.get_json()
        try:
            tab = Tab(user_id=session.get('user_id'), title=data['title'], artist=data['artist'], bpm=int(data['bpm']),  capo=int(data['capo']), tuning=data['tuning'])
            db.session.add(tab)
            db.session.commit()
        except ValueError as e:
            return make_response(jsonify({'errors': [str(e)]}), 422)
        return make_response(jsonify(tab.to_dict()), 201)
    
api.add_resource(Tabs, '/tabs')

class TabById(Resource):
    def get(self, id):
        tab = Tab.query.filter(Tab.id == id).first()
        if not tab:
            return make_response(jsonify({'error': "Tab not found"}), 404)
        elif not tab.visibility and not tab.user_id == session.get('user_id'):
            return make_response(jsonify({'error': "Tab not found"}), 404)
        else:
            return make_response(jsonify(tab.to_dict()), 200)

    def patch(self, id):
        tab = Tab.query.filter(Tab.id == id).first()
        if not tab or not tab.user_id == session.get('user_id'):
            return make_response(jsonify({'error': "Tab not found"}), 404)
        data = request.get_json()
        try:
            for attr in data:
                setattr(tab, attr, data[attr])
            db.session.commit()
        except ValueError as e:
            return make_response(jsonify({'errors': [str(e)]}), 422)
        return make_response(jsonify(tab.to_dict()), 200)
    
    def delete(self, id):
        tab = Tab.query.filter(Tab.id == id).first()
        if not tab or not tab.user_id == session.get('user_id'):
            return make_response(jsonify({'error': "Tab not found"}), 404)
        db.session.delete(tab)
        db.session.commit()
        return {}, 204
    
api.add_resource(TabById, '/tabs/<int:id>')
    
class TabDataByTabId(Resource):
    def get(self, id):
        tab_data = [td.to_dict() for td in TabData.query.filter(TabData.tab_id == id).all()]
        return make_response(jsonify(tab_data), 200)
    
    def post(self, id):
        data = request.get_json()
        if not session.get('user_id') == Tab.query.filter(Tab.id == id).first().user_id:
            return make_response(jsonify({'error': "Request not allowed"}), 404)
        for note in data:
            duplicate_note = duplicate_note = TabData.query.filter((TabData.tab_id == id) & (TabData.measure == note['measure']) & (TabData.string == note['string']) & (TabData.beat == note['beat'])).first()
            if duplicate_note:
                if duplicate_note.fret != note['fret'] or duplicate_note.duration != note['duration']:
                    print(duplicate_note.to_dict())
                    db.session.delete(duplicate_note)
                    note = TabData(tab_id=id, fret=note['fret'], string=note['string'], beat= note['beat'], measure=note['measure'], duration=note['duration'], time=note['time'])
                    db.session.add(note)
                    db.session.commit()
            else:
                try:
                    note = TabData(tab_id=id, fret=note['fret'], string=note['string'], beat= note['beat'], measure=note['measure'], duration=note['duration'], time=note['time'])
                    db.session.add(note)
                    db.session.commit()
                except ValueError as e:
                    return make_response(jsonify({'errors': [str(e)]}), 422)
            tab_data = [t.to_dict() for t in TabData.query.filter(TabData.tab_id == id).all()]
        return make_response(jsonify(tab_data), 201)
    
    
api.add_resource(TabDataByTabId, '/tab_data/<int:id>')

if __name__ == '__main__':
    app.run(port=5555,debug=True)