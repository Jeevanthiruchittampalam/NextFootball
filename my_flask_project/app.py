from flask import Flask, jsonify, request
import pickle
import pandas as pd

app = Flask(__name__)

model = None

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/predict', methods=['POST'])
def predict():
    global model
    data = request.get_json(force=True)
    # Assuming data is in the correct format as your model expects
    # Convert the JSON data to Pandas DataFrame
    input_data = pd.DataFrame([data])
    prediction = model.predict(input_data)
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    model_path = '../NextFootball/app/models/PredictionModel.pkl'
    with open(model_path, 'rb') as model_file:
        model = pickle.load(model_file)
    app.run(debug=True)

