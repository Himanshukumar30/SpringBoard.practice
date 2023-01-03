from flask import Flask, render_template, request
from stories import stories
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"
app.debug=True
toolbar = DebugToolbarExtension(app)

@app.route("/")
def story_select():
    return render_template("story-select.html", stories=stories.values())


@app.route("/questions")
def ask_questions():
    story_id = request.args["story_id"]
    story = stories[story_id]

    prompts = story.prompts

    return render_template("questions.html",story_id=story_id,title=story.title,prompts=prompts)

@app.route("/story")
def display_story():   
    story_id = request.args["story_id"]
    story = stories[story_id]

    text = story.generate(request.args)

    return render_template("story.html",title=story.title,text=text)