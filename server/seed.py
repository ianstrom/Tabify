from config import app
from models import db, User, Review, Tab, TabData


with app.app_context():
    db.drop_all()
    db.create_all()


    u1 = User(username='ian')
    u1.password_hash = 'test'
    u2 = User(username='jack')
    u2.password_hash = 'test'
    u3 = User(username='chris')
    u3.password_hash = 'test'
    u4 = User(username='micheal')
    u4.password_hash = 'test'
    u5 = User(username='nick')
    u5.password_hash = 'test'
    u6 = User(username='finn')
    u6.password_hash = 'test'
    uarr = [u1, u2, u3, u4, u5, u6]
    db.session.add_all(uarr)
    db.session.commit()

    t1 = Tab(capo=0, tuning='EADGBE', bpm=80, user_id=u1.id, title='me1', artist='ian', visibility=True)
    t2 = Tab(capo=0, tuning='EADGBE', bpm=80, user_id=u2.id, title='me2', artist='ian2', visibility=True)
    t3 = Tab(capo=0, tuning='EADGBE', bpm=80, user_id=u3.id, title='me3', artist='ian3', visibility=True)
    t4 = Tab(capo=0, tuning='EADGBE', bpm=80, user_id=u4.id, title='me4', artist='ian4', visibility=True)
    t5 = Tab(capo=0, tuning='EADGBE', bpm=80, user_id=u5.id, title='me5', artist='ian5', visibility=True)
    t6 = Tab(capo=0, tuning='EADGBE', bpm=80, user_id=u6.id, title='me6', artist='ian6', visibility=True)
    tarr = [t1, t2, t3, t4, t5, t6]
    db.session.add_all(tarr)
    db.session.commit()

    r1 = Review(user_id=2, tab_id=1, rating=5, text='test')
    r2 = Review(user_id=3, tab_id=1, rating=3, text='test')
    r3 = Review(user_id=4, tab_id=1, rating=4, text='test')
    r4 = Review(user_id=5, tab_id=1, rating=5, text='test')
    r5 = Review(user_id=6, tab_id=1, rating=2, text='test')
    r6 = Review(user_id=1, tab_id=2, rating=5, text='test')
    r7 = Review(user_id=3, tab_id=2, rating=3, text='test')
    r8 = Review(user_id=4, tab_id=2, rating=4, text='test')
    r9 = Review(user_id=5, tab_id=2, rating=5, text='test')
    r10 = Review(user_id=6, tab_id=2, rating=2, text='test')
    r11 = Review(user_id=1, tab_id=3, rating=5, text='test')
    r12 = Review(user_id=2, tab_id=3, rating=3, text='test')
    r13 = Review(user_id=4, tab_id=3, rating=4, text='test')
    r14 = Review(user_id=5, tab_id=3, rating=5, text='test')
    r15 = Review(user_id=6, tab_id=3, rating=2, text='test')
    r16 = Review(user_id=1, tab_id=4, rating=5, text='test')
    r17 = Review(user_id=2, tab_id=4, rating=3, text='test')
    r18 = Review(user_id=3, tab_id=4, rating=4, text='test')
    r19 = Review(user_id=5, tab_id=4, rating=5, text='test')
    r20 = Review(user_id=6, tab_id=4, rating=2, text='test')
    r21 = Review(user_id=1, tab_id=5, rating=5, text='test')
    r22 = Review(user_id=2, tab_id=5, rating=3, text='test')
    r23 = Review(user_id=3, tab_id=5, rating=4, text='test')
    r24 = Review(user_id=4, tab_id=5, rating=5, text='test')
    r25 = Review(user_id=6, tab_id=5, rating=2, text='test')
    r26 = Review(user_id=1, tab_id=6, rating=5, text='test')
    r27 = Review(user_id=2, tab_id=6, rating=3, text='test')
    r28 = Review(user_id=3, tab_id=6, rating=4, text='test')
    r29 = Review(user_id=4, tab_id=6, rating=5, text='test')
    r30 = Review(user_id=5, tab_id=6, rating=2, text='test')
    # create an array reviews 1-30 in it
    rarr = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10,
            r11, r12, r13, r14, r15, r16, r17, r18, r19, r20,
            r21, r22, r23, r24, r25, r26, r27, r28, r29, r30]
    db.session.add_all(rarr)
    db.session.commit()


    td1 = TabData(tab_id=t1.id, beat=1, string=6, fret=0, measure=1, duration="Eighth")
    td1.time = ((td1.measure - 1) * 4 + (td1.beat - 1)) * (60 / t1.bpm) / 4
    td2 = TabData(tab_id=t1.id, beat=1, string=5, fret=1, measure=2, duration="Eighth")
    td2.time = ((td2.measure - 1) * 4 + (td2.beat - 1)) * (60 / t1.bpm) / 4
    td3 = TabData(tab_id=t1.id, beat=1, string=4, fret=1, measure=2, duration="Eighth")
    td3.time = ((td3.measure - 1) * 4 + (td3.beat - 1)) * (60 / t1.bpm) / 4
    td4 = TabData(tab_id=t1.id, beat=1, string=3, fret=1, measure=3, duration="Eighth")
    td4.time = ((td4.measure - 1) * 4 + (td4.beat - 1)) * (60 / t1.bpm) / 4
    td5 = TabData(tab_id=t1.id, beat=1, string=2, fret=1, measure=3, duration="Eighth")
    td5.time = ((td5.measure - 1) * 4 + (td5.beat - 1)) * (60 / t1.bpm) / 4
    td6 = TabData(tab_id=t1.id, beat=1, string=1, fret=1, measure=4, duration="Eighth")
    td6.time = ((td6.measure - 1) * 4 + (td6.beat - 1)) * (60 / t1.bpm) / 4
    td7 = TabData(tab_id=t2.id, beat=1, string=6, fret=1, measure=1, duration="Eighth")
    td7.time = ((td7.measure - 1) * 4 + (td7.beat - 1)) * (60 / t2.bpm) / 4
    td8 = TabData(tab_id=t2.id, beat=1, string=5, fret=1, measure=2, duration="Eighth")
    td8.time = ((td8.measure - 1) * 4 + (td8.beat - 1)) * (60 / t2.bpm) / 4
    td9 = TabData(tab_id=t2.id, beat=1, string=4, fret=1, measure=2, duration="Eighth")
    td9.time = ((td9.measure - 1) * 4 + (td9.beat - 1)) * (60 / t2.bpm) / 4
    td10 = TabData(tab_id=t2.id, beat=1, string=3, fret=1, measure=3, duration="Eighth")
    td10.time = ((td10.measure - 1) * 4 + (td10.beat - 1)) * (60 / t2.bpm) / 4
    td11 = TabData(tab_id=t2.id, beat=1, string=2, fret=1, measure=3, duration="Eighth")
    td11.time = ((td11.measure - 1) * 4 + (td11.beat - 1)) * (60 / t2.bpm) / 4
    td12 = TabData(tab_id=t2.id, beat=1, string=1, fret=1, measure=4, duration="Eighth")
    td12.time = ((td12.measure - 1) * 4 + (td12.beat - 1)) * (60 / t2.bpm) / 4
    td13 = TabData(tab_id=t3.id, beat=1, string=6, fret=1, measure=1, duration="Eighth")
    td13.time = ((td13.measure - 1) * 4 + (td13.beat - 1)) * (60 / t3.bpm) / 4
    td14 = TabData(tab_id=t3.id, beat=1, string=5, fret=1, measure=2, duration="Eighth")
    td14.time = ((td14.measure - 1) * 4 + (td14.beat - 1)) * (60 / t3.bpm) / 4
    td15 = TabData(tab_id=t3.id, beat=1, string=4, fret=1, measure=2, duration="Eighth")
    td15.time = ((td15.measure - 1) * 4 + (td15.beat - 1)) * (60 / t3.bpm) / 4
    td16 = TabData(tab_id=t3.id, beat=1, string=3, fret=1, measure=3, duration="Eighth")
    td16.time = ((td16.measure - 1) * 4 + (td16.beat - 1)) * (60 / t3.bpm) / 4
    td17 = TabData(tab_id=t3.id, beat=1, string=2, fret=1, measure=3, duration="Eighth")
    td17.time = ((td17.measure - 1) * 4 + (td17.beat - 1)) * (60 / t3.bpm) / 4
    td18 = TabData(tab_id=t3.id, beat=1, string=1, fret=1, measure=4, duration="Eighth")
    td18.time = ((td18.measure - 1) * 4 + (td18.beat - 1)) * (60 / t3.bpm) / 4
    td19 = TabData(tab_id=t4.id, beat=1, string=6, fret=1, measure=1, duration="Eighth")
    td19.time = ((td19.measure - 1) * 4 + (td19.beat - 1)) * (60 / t4.bpm) / 4
    td20 = TabData(tab_id=t4.id, beat=1, string=5, fret=1, measure=2, duration="Eighth")
    td20.time = ((td20.measure - 1) * 4 + (td20.beat - 1)) * (60 / t4.bpm) / 4
    td21 = TabData(tab_id=t4.id, beat=1, string=4, fret=1, measure=2, duration="Eighth")
    td21.time = ((td21.measure - 1) * 4 + (td21.beat - 1)) * (60 / t4.bpm) / 4
    td22 = TabData(tab_id=t4.id, beat=1, string=3, fret=1, measure=3, duration="Eighth")
    td22.time = ((td22.measure - 1) * 4 + (td22.beat - 1)) * (60 / t4.bpm) / 4
    td23 = TabData(tab_id=t4.id, beat=1, string=2, fret=1, measure=3, duration="Eighth")
    td23.time = ((td23.measure - 1) * 4 + (td23.beat - 1)) * (60 / t4.bpm) / 4
    td24 = TabData(tab_id=t4.id, beat=1, string=1, fret=1, measure=4, duration="Eighth")
    td24.time = ((td24.measure - 1) * 4 + (td24.beat - 1)) * (60 / t4.bpm) / 4
    td25 = TabData(tab_id=t5.id, beat=1, string=6, fret=1, measure=1, duration="Eighth")
    td25.time = ((td25.measure - 1) * 4 + (td25.beat - 1)) * (60 / t5.bpm) / 4
    td26 = TabData(tab_id=t5.id, beat=1, string=5, fret=1, measure=2, duration="Eighth")
    td26.time = ((td26.measure - 1) * 4 + (td26.beat - 1)) * (60 / t5.bpm) / 4
    td27 = TabData(tab_id=t5.id, beat=1, string=4, fret=1, measure=2, duration="Eighth")
    td27.time = ((td27.measure - 1) * 4 + (td27.beat - 1)) * (60 / t5.bpm) / 4
    td28 = TabData(tab_id=t5.id, beat=1, string=3, fret=1, measure=3, duration="Eighth")
    td28.time = ((td28.measure - 1) * 4 + (td28.beat - 1)) * (60 / t5.bpm) / 4
    td29 = TabData(tab_id=t5.id, beat=1, string=2, fret=1, measure=3, duration="Eighth")
    td29.time = ((td29.measure - 1) * 4 + (td29.beat - 1)) * (60 / t5.bpm) / 4
    td30 = TabData(tab_id=t5.id, beat=1, string=1, fret=1, measure=4, duration="Eighth")
    td30.time = ((td30.measure - 1) * 4 + (td30.beat - 1)) * (60 / t5.bpm) / 4
    td31 = TabData(tab_id=t6.id, beat=1, string=6, fret=1, measure=1, duration="Eighth")
    td31.time = ((td31.measure - 1) * 4 + (td31.beat - 1)) * (60 / t6.bpm) / 4
    td32 = TabData(tab_id=t6.id, beat=1, string=5, fret=1, measure=2, duration="Eighth")
    td32.time = ((td32.measure - 1) * 4 + (td32.beat - 1)) * (60 / t6.bpm) / 4
    td33 = TabData(tab_id=t6.id, beat=1, string=4, fret=1, measure=2, duration="Eighth")
    td33.time = ((td33.measure - 1) * 4 + (td33.beat - 1)) * (60 / t6.bpm) / 4
    td34 = TabData(tab_id=t6.id, beat=1, string=3, fret=1, measure=3, duration="Eighth")
    td34.time = ((td34.measure - 1) * 4 + (td34.beat - 1)) * (60 / t6.bpm) / 4
    td35 = TabData(tab_id=t6.id, beat=1, string=2, fret=1, measure=3, duration="Eighth")
    td35.time = ((td35.measure - 1) * 4 + (td35.beat - 1)) * (60 / t6.bpm) / 4
    td36 = TabData(tab_id=t6.id, beat=1, string=1, fret=1, measure=4, duration="Eighth")
    td36.time = ((td36.measure - 1) * 4 + (td36.beat - 1)) * (60 / t6.bpm) / 4
    td38 = TabData(tab_id=t1.id , beat=1, string=5, fret=2, measure=1, duration="Eighth")
    td38.time = ((td38.measure - 1) * 4 + (td38.beat - 1)) * (60 / t1.bpm) / 4
    td39 = TabData(tab_id=t1.id , beat=1, string=4, fret=2, measure=1, duration="Eighth")
    td39.time = ((td39.measure - 1) * 4 + (td39.beat - 1)) * (60 / t1.bpm) / 4
    td40 = TabData(tab_id=t1.id , beat=1, string=3, fret=1, measure=1, duration="Eighth")
    td40.time = ((td40.measure - 1) * 4 + (td40.beat - 1)) * (60 / t1.bpm) / 4
    td41 = TabData(tab_id=t1.id , beat=1, string=2, fret=0, measure=1, duration="Eighth")
    td41.time = ((td41.measure - 1) * 4 + (td41.beat - 1)) * (60 / t1.bpm) / 4
    td42 = TabData(tab_id=t1.id , beat=1, string=1, fret=0, measure=1, duration="Eighth")
    td42.time = ((td42.measure - 1) * 4 + (td42.beat - 1)) * (60 / t1.bpm) / 4

    tdarr = [td1, td2, td3, td4, td5, td6, td7, td8, td9, td10,
            td11, td12, td13, td14, td15, td16, td17, td18, td19, td20,
            td21, td22, td23, td24, td25, td26, td27, td28, td29, td30,
            td31, td32, td33, td34, td35, td36, td38, td39, td40, td41, td42]
    db.session.add_all(tdarr)
    db.session.commit()