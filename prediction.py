from flask import Flask, request, jsonify
import pandas as pd
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

# Simple mock data for model training
data = {'day': [1, 2, 3, 4, 5, 6, 7], 'usage': [20, 22, 19, 21, 20, 23, 25]}
df = pd.DataFrame(data)

# Train a basic linear regression model for future predictions
X = df[['day']]  # Day of usage
y = df['usage']  # Energy consumption (kWh)
model = LinearRegression()
model.fit(X, y)

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from user input
    daily_consumption = request.json['daily_consumption']

    # Predict future energy usage
    future_day = len(df) + 1  # Next day for prediction
    future_usage = model.predict([[future_day]])[0]

    return jsonify({'future_usage': future_usage})

if __name__ == '__main__':
    app.run(debug=True)
