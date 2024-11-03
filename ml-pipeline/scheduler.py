import schedule
import time
from model_training import train_model  

# Schedule the model training
schedule.every().sunday.at("09:00").do(train_model)

print("Scheduler is running...")

while True:
    schedule.run_pending()
    time.sleep(1)
