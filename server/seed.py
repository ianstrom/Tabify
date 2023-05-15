from config import app
from models import db, User, Review, Tab, TabData
import os


with app.app_context():
    user = db.session.query(User).first()
    print(user)
    print(os.environ.get('DATABASE_URI'))