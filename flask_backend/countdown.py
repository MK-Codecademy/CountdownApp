from flask import Flask, render_template

# instantiate the flask app
app = Flask(__name__)

# home page route
@app.route("/")
def index():
    return render_template('index.html')


# run the script in debug mode if it's run with python from the terminal
if __name__ == '__main__':
    app.run(debug=True)