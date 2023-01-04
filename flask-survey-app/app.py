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
    
    return render_template('satisfaction-survey.html', satisfaction_survey=satisfaction_survey)

@app.route('/start', methods=['POST'])
def start_survey():
    return redirect('/questions/0')

@app.route("/answer", methods=["POST"])
def handle_question():
    choice = request.form['answer']
    responses.append(choice)

    if (len(responses) == len(satisfaction_survey.questions)):
        return redirect("/complete")

    else:
        return redirect(f"/questions/{len(responses)}")


@app.route('/questions/<int:id>')
def display_question(id):
    if (responses is None):
        # If user proceed with no response
        return redirect("/")

    if (len(responses) == len(satisfaction_survey.questions)):
        # If user completed answering all the survey questions
        return redirect("/complete")

    if (len(responses) != id):
        # If user is trying to access invalid question id
        flash(f"Invalid question id: {id}.")
        return redirect(f"/questions/{len(responses)}")
    
    question = satisfaction_survey.questions[id]
    return render_template('questions.html',question=question)

@app.route('/complete')
def survey_complete():
    return render_template('complete.html')