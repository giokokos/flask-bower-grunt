from flask import render_template
from boilerapp import app

@app.route('/')
def index():
    return render_template('index.html')