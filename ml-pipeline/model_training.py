import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import joblib
from preprocessing import preprocess_data
import requests

def load_historical_data():
    try:
        response = requests.get("http://localhost:3001/historical-data")
        response.raise_for_status()
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return [] 

def train_model():
    data = load_historical_data()
    X_train, X_test, y_train, y_test, scaler = preprocess_data(data)

    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)
    mse = mean_squared_error(y_test, predictions)
    print(f"Mean Squared Error: {mse}")

    joblib.dump(model, 'inventory_forecast_model.pkl')
    joblib.dump(scaler, 'scaler.pkl')
    print("Model and scaler saved successfully!")


