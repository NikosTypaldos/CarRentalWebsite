const btn= document.querySelector('#calcCost');
const displayCost = document.querySelector('#displayCost');
const calcCost = {
    cubism: document.querySelector('#engineDisplacement'),
    driverAge: document.querySelector('#selectAge'),
    pickupDate: document.querySelector('#fromDate'),
    dropOffDate: document.querySelector('#toDate')
}

btn.onclick = () => {
    var premiumCost = 0;
    var cost2 = 0;
    
    const daysOfRental = (calcCost.dropOffDate.valueAsDate - calcCost.pickupDate.valueAsDate) / (1000 * 3600 * 24);
    const ageCost = calcCost['driverAge'].value >= 18 && calcCost['driverAge'].value < 22 ? (calcCost['driverAge'].value * 0.00042)
                : calcCost['driverAge'].value >= 22 && calcCost['driverAge'].value < 30 ? (calcCost['driverAge'].value * 0.00036)
                : calcCost['driverAge'].value >= 30 && calcCost['driverAge'].value <= 85? (calcCost['driverAge'].value * 0.00023)
                : resetForm();
    const cubismCostperDay = calcCost['cubism'].value <= 1600 && calcCost['cubism'].value > 100? 
                                                        ( daysOfRental <= 5 && daysOfRental > 0 ? 15.42
                                                        : daysOfRental <= 10 && daysOfRental > 0? 14.62 
                                                        : daysOfRental > 10 && daysOfRental > 0? 13.15
                                                        : resetForm())
                        : calcCost['cubism'].value > 1600 && calcCost['cubism'].value <= 2000 ?
                                                        (daysOfRental <= 5 && daysOfRental > 0 ? 16.82
                                                        : daysOfRental <= 10 && daysOfRental > 0 ? 15.76 
                                                        : daysOfRental > 10 && daysOfRental > 0 ? 14.80
                                                        : resetForm())
                        : calcCost['cubism'].value > 2000 ?
                                                        (daysOfRental <= 5 && daysOfRental > 0 ? 18.22
                                                            : daysOfRental <= 10 && daysOfRental > 0 ? 17.10 
                                                            : daysOfRental > 10 && daysOfRental > 0 ? 16.20
                                                            : resetForm()) 
                        :  console.log(15);
    premiumCost = ageCost * calcCost['cubism'].value;
    cost2 = daysOfRental * cubismCostperDay;
    displayCost.textContent = `${(premiumCost + cost2).toFixed(2)} €`;
}

function resetForm() {
    alert("Please enter valid information");
    displayCost.textContent = 0 +' €';
    document.getElementById('costForm').reset();
}