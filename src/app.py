from flask import Flask, jsonify
import json

app = Flask(__name__)

tasks = [
	{
		'id': 1,
		'name': "Argo",
		"description": "Duas portas",
        "marca":"FIAT"
	},
	{
		'id': 2,
		'name': "Pulse",
		"description": "Quatro portas",
        "marca":"FIAT"
	},
]



@app.route('/api/tasks') 
def home():

    tasksJSON = jsonify(tasks)
    tasksJSON.headers.add("Access-Control-Allow-Origin", "*")

    return tasksJSON

if __name__ == '__main__':
	app.run()