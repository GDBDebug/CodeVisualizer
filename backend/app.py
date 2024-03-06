import time
from flask import Flask

app = Flask(__name__)

@app.route('/now')
def get_current_time():
    return {'now': time.ctime(time.time())}
