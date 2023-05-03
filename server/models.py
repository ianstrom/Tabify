from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from config import bcrypt, db

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_only = ('id', 'username', 'tabs',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    _password_hash = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    tabs = db.relationship('Tab', backref='user', cascade='all, delete-orphan')
    reviews = db.relationship('Review', backref='user', cascade='all, delete-orphan')


    @hybrid_property
    def password_hash(self):
        raise Exception("Password hashes cannot be viewed")
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))


class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_only = ('id', 'rating', 'text', 'user_id', 'user_username')

    id = db.Column(db.Integer, primary_key=True)
    # max 5
    rating = db.Column(db.Integer, nullable=False)
    text = db.Column(db.String, nullable=False)
    tab_id = db.Column(db.Integer, db.ForeignKey('tabs.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    @property
    def user_username(self):
        username = self.user.username
        return username


class Tab(db.Model, SerializerMixin):
    __tablename__ = 'tabs'

    serialize_only = ('id', 'title', 'capo', 'tuning', 'bpm', 'artist', 'username', 'average_rating', 'user_id')

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    artist = db.Column(db.String, nullable=False)
    visibility = db.Column(db.Boolean, nullable=False, default=False)
    capo = db.Column(db.Integer, nullable=False)
    tuning = db.Column(db.String, nullable=False)
    bpm = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    tab_data = db.relationship('TabData', backref='tab', cascade='all, delete-orphan')
    reviews = db.relationship('Review', backref='tab', cascade='all, delete-orphan')

    @property
    def average_rating(self):
        ratings = [review.rating for review in self.reviews]
        return sum(ratings) / len(ratings)
    
    @property
    def username(self):
        username = self.user.username
        return username


class TabData(db.Model, SerializerMixin):
    __tablename__ = 'tab_data'

    serialize_only = ('id', 'string', 'fret', 'time', 'measure', 'duration', 'beat')

    id = db.Column(db.Integer, primary_key=True)
    tab_id = db.Column(db.Integer, db.ForeignKey('tabs.id'), nullable=False)
    beat = db.Column(db.Integer)
    string = db.Column(db.Integer)
    fret = db.Column(db.Integer)
    time = db.Column(db.Integer)
    measure = db.Column(db.Integer)
    duration = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
