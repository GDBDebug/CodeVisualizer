import time, re
from flask import Flask, request, jsonify, send_file

from constants import DEFAULT_CPP_FILE_NAME
from utils import compile_code, execute_program, remove_files

app = Flask(__name__)

@app.route('/compile', methods=['POST'])
def compile_source():
    source_code = request.json.get('sourceCode')
    user_inputs = request.json.get('inputs')

    try:
        with open(DEFAULT_CPP_FILE_NAME, 'w') as file:
            file.write(source_code)
        
        # Run process to compile code and calculate time taken by the process to finish
        start_time = time.time()
        compilation_result = compile_code(file.name)
        end_time = time.time()

        # Run the program in case of successful compilation
        if compilation_result.returncode == 0:
            program_result = execute_program(user_inputs)

        # Extract {file_name, line, column, type, message} from the compilation process's stderr
        error_message = re.findall(r'(.*):(\d+):(\d+): (error|warning): (.*)', compilation_result.stderr)
        for info in error_message:
            error_info = {'file_name': info[0], 'line': info[1], 'column': info[2], 'type': info[3], 'message': info[4]}

        return jsonify({'status': 'Success' if compilation_result.returncode == 0 else 'Failure',
                        'exit_code': program_result.returncode if compilation_result.returncode == 0 else compilation_result.returncode, 
                        'stdout': program_result.stdout if compilation_result.returncode == 0 else compilation_result.stdout,
                        'stderr': compilation_result.stderr,
                        'error_info': '' if compilation_result.returncode == 0 else error_info,
                        'time': round((end_time-start_time)*1000, 2)})
        
    finally:
       remove_files()

@app.route('/download', methods=['POST'])
def download_code():
    source_code = request.json.get('sourceCode')

    try:
        with open(DEFAULT_CPP_FILE_NAME, 'w') as file:
            file.write(source_code)

        return send_file(DEFAULT_CPP_FILE_NAME, as_attachment=True)

    finally:
        remove_files()
