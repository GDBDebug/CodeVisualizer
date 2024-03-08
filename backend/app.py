from flask import Flask, request, jsonify
import subprocess


app = Flask(__name__)

@app.route('/compile', methods=['POST'])
def compile_source():
    source = request.json.get('source')

    try:
        with open('main.cpp', 'w') as file:
            file.write(source)
        
        # Run the subprocess that compiles the .cpp file using g++ and stores result (0 in case of success, and -N in case of failure)
        result = subprocess.run(['g++', 'main.cpp', '-o', 'main'], capture_output=True, text=True)

        if result.returncode != 0:
            return jsonify({'status': False, 'output': result.stderr})
        
        # Run the subprocess that executes the compiled file
        output = subprocess.run(['./main'], capture_output=True, text=True)
        return jsonify({'status': True, 'output': output.stdout})
        
    finally:
        # Run the subprocess that removes the temporary files created
        subprocess.run(['rm', 'main.cpp', 'main'])
