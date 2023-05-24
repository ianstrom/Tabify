from config import app
from models import db, User, Review, Tab, TabData
import os


with app.app_context():
    tabs = TabData.query.order_by(TabData.tab_id, TabData.measure, TabData.beat).all()
    new_tabs = []
    for i, tab in enumerate(tabs):
        tab.id = i + 1
        new_tabs.append(tab)
    sorted_tabs = sorted(new_tabs, key=lambda x: (x.id, x.measure, x.beat))
    db.session.add_all(sorted_tabs)
    db.session.commit()