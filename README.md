# Energy-Consumption-Optimizer
A web-based application designed to help users track their energy usage, calculate costs, predict future consumption, and provide actionable tips for reducing energy consumption. This tool aims to promote cost savings and environmental sustainability.

### Features and Functionalities 
- Energy Tracking: Input daily energy consumption and cost per unit to calculate total usage and expenses over different time frames (daily, weekly, monthly).
* Predictions: Forecast energy usage and costs for the next three months using a basic predictive model.
+ Energy Saving Tips: Offers tailored suggestions to reduce energy consumption.
- Alerts: Notifies users if their energy usage exceeds a specified threshold.
* Interactive UI: Simple and intuitive user interface with results displayed dynamically.

### Installation and Usage Instructions
#### Installation 
1. Clone the Repository
   '''
   git clone <repository-url>
   cd energy-consumption-optimizer
   '''
2. Backend Setup
   - Install Python dependencies
     '''
     pip install flask pandas scikit-learn
     '''
   - Run the Flask server
     '''
     python prediction.py
     '''
3. Frontend Setup
   Open index.html in your preferred browser or serve the files through a local server for better performance.

#### Usage
1. Enter daily energy usage (kWh) and cost per unit (₹).
2. Select a time frame (daily, weekly, monthly).
3. Click Calculate to view total usage, cost, and future predictions.
4. Review the energy-saving tips to optimize consumption

### Tech Stack and Dependencies
#### Frontend 


