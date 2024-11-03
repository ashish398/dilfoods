from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import pandas as pd
from model_training import train_model 
import uvicorn 

app = FastAPI()

try:
    model = joblib.load('inventory_forecast_model.pkl')
    scaler = joblib.load('scaler.pkl')
except FileNotFoundError:
    model = None
    scaler = None

class InventoryRequest(BaseModel):
    date: str


@app.post("/predict")
async def predict(data: list[InventoryRequest]):
    try:
        if model is None or scaler is None:
            raise HTTPException(status_code=500, detail="Model not loaded. Train the model first.")

        input_data = [item.dict() for item in data]
        df = pd.DataFrame(input_data)

        df['date'] = pd.to_datetime(df['date'])
        df['month'] = df['date'].dt.month
        df['day'] = df['date'].dt.day
        df['weekday'] = df['date'].dt.weekday
        df = df.drop(['date'], axis=1)

        X = scaler.transform(df)

        predictions = model.predict(X)
        return {"predictions": predictions.tolist()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/train")
async def train():
    try:
        train_model()
        
        global model, scaler
        model = joblib.load('inventory_forecast_model.pkl')
        scaler = joblib.load('scaler.pkl')

        return {"message": "Model trained successfully and reloaded."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during training: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)  