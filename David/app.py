from flask import Flask
from flask import render_template

app = Flask(__name__)

app.static_folder = 'static'

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/menu")
def menu():
    return render_template('menu.html')

@app.route("/inicio")
def inicio():
    return render_template('inicio.html')

@app.route("/mejora")
def mejora():
    return render_template('mejora.html')

@app.route("/registro")
def registro():
    return render_template('registro.html')

@app.route("/chat")
def chat():
    return render_template('chat.html')
