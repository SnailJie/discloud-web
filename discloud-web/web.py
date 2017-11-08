__author__ = 'jren'

from flask import Flask
from flask import request
from flask import render_template
import os
template_dir = os.path.join(os.getcwd(), os.path.join(os.path.dirname(__file__), 'static/templates'))
app = Flask(__name__, template_folder=template_dir)




<<<<<<< HEAD
@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

=======
@app.route("/")
def index():
    return render_template("index.html")

>>>>>>> origin/master
def main():
    port = 5000
    app.run(host="0.0.0.0", port=port, threaded=True)

if __name__ == '__main__':
    main()