from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_login import LoginManager
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hey Flask"


if __name__ == '__main__':
    app.run(debug=True)