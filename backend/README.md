# _Code Visualizer_ Backend

## Getting Started

### Dependencies

#### 1. Install Python and PIP
```
sudo apt update
sudo apt install python3
sudo apt install python3-pip
```

#### 2. Setup virtual environment
Its recommended to work within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organaized. Navigate to the `/backend` directory and run
```
python3 -m venv venv
source venv/bin/activate
```

#### 3. PIP Dependencies
Once you have your virtual environment setup and running, install dependencies by navigating to the `/backend` directory and running
```
pip install -r requirements.txt
```

#### 4. Running the server
From within the `./backend` directory, first ensure you are working using your created virtual environment. Then, running any of the following commands will run on `http://localhost:5000`.
```
flask run 
``` 
or
```
flask run --debug
```