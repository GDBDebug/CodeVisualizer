import subprocess


def compile_code(file_name, debug_flag=False):
    if debug_flag:
        return subprocess.run(['g++', '-g', '-o', 'main', file_name], capture_output=True, text=True)

    return subprocess.run(['g++', '-o', 'main', file_name], capture_output=True, text=True)

def execute_program(inputs):
    return subprocess.run(['./main'], input=''.join(inputs), stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

def remove_files():
    subprocess.run(['rm', 'main.cpp', 'main'])
    