# initialize a flask restful app
from flask import request, session, jsonify, make_response, render_template
from flask_restful import Resource
from models import db, User, Review, Tab, TabData
from sqlalchemy import and_
from config import app, api, db
import os

app.secret_key = b'kyushikiscool'


@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template('index.html')
class CheckSession(Resource):
    def get(self):
        if not session.get('user_id'):
            return make_response(jsonify({'error': "No user logged in"}), 401)
        user = User.query.filter(User.id == session.get('user_id')).first()
        if not user:
            return make_response(jsonify({'error': "User not found"}), 401)
        user.all_tabs = []
        for t in Tab.query.filter((Tab.visibility == True) & (Tab.user_id != session.get('user_id'))).limit(8):
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
            return make_response(jsonify({'error': "User not found"}), 401)
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
        reviews = [r.to_dict()
                   for r in Review.query.filter(Review.tab_id == id)]
        return make_response(jsonify(reviews), 200)

    def post(self, id):
        data = request.get_json()
        try:
            review = Review(user_id=session.get('user_id'),
                            tab_id=id, text=data['text'], rating=data['rating'])
            db.session.add(review)
            db.session.commit()
        except ValueError as e:
            return make_response(jsonify({'errors': [str(e)]}), 422)
        return make_response(jsonify(review.to_dict()), 201)


api.add_resource(Reviews, '/reviews/<int:id>')


class ReviewById(Resource):
    def patch(self, id):
        data = request.get_json()
        review = Review.query.filter(
            (Review.user_id == session.get('user_id')) & (Review.id == id)).first()
        if not review:
            return make_response(jsonify({'error': "Review not found"}), 404)
        try:
            for attr in data:
                setattr(review, attr, data[attr])
            db.session.commit()
        except ValueError as e:
            return make_response(jsonify({'errors': [str(e)]}), 422)
        return make_response(jsonify(review.to_dict()), 200)
    
    def delete(self, id):
        review = Review.query.filter((Review.user_id == session.get('user_id')) & (Review.id == id)).first()
        if not review:
            return make_response(jsonify({'error': "Review not found"}), 404)
        db.session.delete(review)
        db.session.commit()
        return {}, 204
    
    
api.add_resource(ReviewById, '/review/<int:id>')


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
            tab = Tab(user_id=session.get('user_id'), title=data['title'], artist=data['artist'], bpm=int(
                data['bpm']),  capo=int(data['capo']), tuning=data['tuning'])
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
            # if data['bpm']:
                # if data['bpm'] != tab.bpm:
                #     tab_data = TabData.query.filter(TabData.tab_id == id).all()
                #     for note in tab_data:
                #         note.time = ((note.measure - 1) * 4 + ((note.beat - 1) / 2)) * (60 / int(data['bpm']))
                #         duration = int(note.duration) / (60 / int(tab.bpm))
                #         note.duration = (60 / int(data['bpm'])) * duration
                #         db.session.add(note)
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
        tab_data = [td.to_dict()
                    for td in TabData.query.filter(TabData.tab_id == id).all()]
        return make_response(jsonify(tab_data), 200)

    def post(self, id):
        data = request.get_json()
        if not session.get('user_id') == Tab.query.filter(Tab.id == id).first().user_id:
            return make_response(jsonify({'error': "Request not allowed"}), 404)
        db.session.query(TabData).filter(TabData.tab_id == id).delete()
        db.session.commit()
        for note in data:
            try:
                note = TabData(tab_id=id, fret=note['fret'], string=note['string'], beat=note['beat'],
                               measure=note['measure'], duration=note['duration'], time=note['time'])
                db.session.add(note)
                db.session.commit()
            except ValueError as e:
                return make_response(jsonify({'errors': [str(e)]}), 422)
            tab_data = [t.to_dict()
                        for t in TabData.query.filter(TabData.tab_id == id).all()]
        return make_response(jsonify(tab_data), 201)


api.add_resource(TabDataByTabId, '/tab_data/<int:id>')
if __name__ == '__main__':
    app.run(port=5555, debug=True)
