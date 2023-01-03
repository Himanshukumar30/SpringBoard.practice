from flask import Flask, render_template, request
from stories import story
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"
app.debug=True
toolbar = DebugToolbarExtension(app)

@app.route('/')
def questions():
    prompts = story.prompts
    return render_template('questions.html', prompts=prompts)

@app.route("/story")
def display_story():   
    text = story.generate(request.args)
    return render_template("story.html", text=text)