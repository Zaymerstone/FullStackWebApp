# TODO UPDATE THIS FILE FOR DEPLOYMENT
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__) # configuration that we need to pass here we create an instance of the flask class
CORS(app) #for security reasons since i plan to run frontend on another port. if back + front are on the same port no need for this line

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///friends.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False #
db = SQLAlchemy(app)

import routes

with app.app_context():
    db.create_all()


if __name__== "__main__": # if check for imports
    app.run(debug=True)
