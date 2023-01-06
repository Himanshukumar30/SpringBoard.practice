from flask import Flask, render_template,redirect,flash, request, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS']=False
app.debug=True
toolbar = DebugToolbarExtension(app)

USER_RESPONSES = 'responses'

@app.route('/')
def start_page():
    
    return render_template('satisfaction-survey.html', satisfaction_survey=satisfaction_survey)

@app.route('/start', methods=['POST'])
def start_survey():
    session[USER_RESPONSES] = []
    return redirect('/questions/0')


@app.route("/answer", methods=["POST"])
def handle_question():
    
    # If user proceed with no response
    if 'answer' not in request.form:
         return redirect("/")
     
    choice = request.form['answer']
    responses = session[USER_RESPONSES]
    responses.append(choice)
    session[USER_RESPONSES] = responses

    if (len(responses) == len(satisfaction_survey.questions)):
        return redirect("/complete")

    else:
        return redirect(f"/questions/{len(responses)}")


@app.route('/questions/<int:id>')
def display_question(id):
    responses = session.get(USER_RESPONSES)
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