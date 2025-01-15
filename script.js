document.getElementById('energy-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Get input values
    const dailyUsage = parseFloat(document.getElementById('daily-usage').value);
    const costPerUnit = parseFloat(document.getElementById('cost-per-unit').value);
    const timeFrame = document.getElementById('time-frame').value;
  
    if (isNaN(dailyUsage) || isNaN(costPerUnit)) {
      alert("Please enter valid values!");
      return;
    }
  
    // Calculate energy usage based on time frame
    let totalUsage = 0;
    let totalCost = 0;
  
    switch (timeFrame) {
      case 'daily':
        totalUsage = dailyUsage;
        totalCost = dailyUsage * costPerUnit;
        break;
      case 'weekly':
        totalUsage = dailyUsage * 7;
        totalCost = totalUsage * costPerUnit;
        break;
      case 'monthly':
        totalUsage = dailyUsage * 30; // Assuming 30 days in a month
        totalCost = totalUsage * costPerUnit;
        break;
    }
  
    // Predict future bills (e.g., for 3 months)
    const predictedUsage = totalUsage * 3;
    const predictedCost = totalCost * 3;
  
    // Update Results Section
    const usageDiv = document.getElementById('usage-tracking');
    const predictionsDiv = document.getElementById('predictions');
    const tipsDiv = document.getElementById('energy-saving-suggestions');
  
    usageDiv.innerHTML = `
      <strong>Total Energy Usage (${timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)}):</strong> ${totalUsage.toFixed(2)} kWh
      <br><strong>Total Cost:</strong> ₹${totalCost.toFixed(2)}
    `;
  
    predictionsDiv.innerHTML = `
      <strong>Predicted Usage for Next 3 Months:</strong> ${predictedUsage.toFixed(2)} kWh
      <br><strong>Predicted Cost:</strong> ₹${predictedCost.toFixed(2)}
    `;
  
    tipsDiv.innerHTML = `
      <strong>Energy Saving Suggestions:</strong>
      <ul>
        <li>Monitor appliances with high energy consumption.</li>
        <li>Unplug devices when not in use to avoid phantom loads.</li>
        <li>Switch to LED bulbs to reduce energy usage.</li>
      </ul>
    `;
  
      // High energy consumption notification
  if (dailyUsage > 50) { // Example threshold
    alert("Your daily energy usage is quite high! Consider reducing usage to save on bills.");
  }

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: "smooth" });
  });
  
  
  
  