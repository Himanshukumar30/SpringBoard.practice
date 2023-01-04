from flask import Flask, render_template,redirect,flash, request
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS']=False
app.debug=True
toolbar = DebugToolbarExtension(app)

responses = []

@app.route('/')
def start_page():
    title = satisfaction_survey.title 
    instructions = satisfaction_survey.instructions
    questions = satisfaction_survey.questions
    return render_template('satisfaction-survey.html', title=title, instructions = instructions, questions = questions)

@app.route('/start', methods=['POST'])
def start_survey():
    return redirect('/questions/0')

@app.route("/answer", methods=["POST"])
def handle_question():
    questions = satisfaction_survey.questions
    choice = request.form['answer']
    responses.append(choice)

    if (len(responses) == len(questions)):
        return redirect("/complete")

    else:
        return redirect(f"/questions/{len(responses)}")


@app.route('/questions/<int:id>')
def display_question(id):
    questions = satisfaction_survey.questions
    question = questions[id]
    if (responses is None):
        # If user proceed with no response
        return redirect("/")

    if (len(responses) == len(questions)):
        # If user completed answering all the survey questions
        return redirect("/complete")

    if (len(responses) != id):
        # If user is trying to access invalid question id
        flash(f"Invalid question id: {id}.")
        return redirect(f"/questions/{len(responses)}")

    
    return render_template('questions.html',question=question)

@app.route('/complete')
def survey_complete():
    return render_template('complete.html')