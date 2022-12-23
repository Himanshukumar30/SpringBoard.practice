# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route('/add')
def add_numbers():
   a = int(request.args.get('a'))
   b = int(request.args.get('b'))
   result = add(a,b)
   
   return str(result)

@app.route('/sub')
def sub_numbers():
   a = int(request.args.get('a'))
   b = int(request.args.get('b'))
   result = sub(a,b)
   
   return str(result)

@app.route('/mult')
def mult_numbers():
   a = int(request.args.get('a'))
   b = int(request.args.get('b'))
   result = mult(a,b)
   
   return str(result)

@app.route('/div')
def div_numbers():
   a = int(request.args.get('a'))
   b = int(request.args.get('b'))
   result = div(a,b)
   
   return str(result)

operator = {
    'add': add,
    'sub': sub,
    'mult': mult,
    'div': div
}

@app.route('/math/<operation>')
def math(operation):
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = operator[operation](a,b)
    return result
