from config import app
from models import db, User, Review, Tab, TabData
import os


with app.app_context():
    db.session.query(User).filter(User.id == 9).delete()
    db.session.commit()