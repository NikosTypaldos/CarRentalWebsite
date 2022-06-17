const btn= document.querySelector('#calcCost');
const displayCost = document.querySelector('#displayCost');
const calcCost = {
    cubism: document.querySelector('#engineDisplacement'),
    driverAge: document.querySelector('#selectAge').value,
    pickupDate: document.querySelector('#fromDate'),
    dropOffDate: document.querySelector('#toDate')
}

btn.onclick = () => {
    const premiumCost = 0;
    const cost2 = 0;
    var daysOfRental = (calcCost.dropOffDate.valueAsDate - calcCost.pickupDate.valueAsDate) / (1000 * 3600 * 24);
    var ageCost = calcCost['driverAge'] >= 18 && calcCost['driverAge'] < 22 ? (calcCost['driverAge'] * 0.00042)
                : calcCost['driverAge'] >= 22 && calcCost['driverAge'] < 30 ? (calcCost['driverAge'] * 0.00036)
                : calcCost['driverAge'] >= 30 ? (calcCost['driverAge'] * 0.00023)
                : reset();
    var cubismCostperDay = calcCost['cubism'].value <= 1600 ? 
                                                        ( daysOfRental <= 5 && daysOfRental > 0 ? 15.42
                                                        : daysOfRental <= 10 && daysOfRental > 0? 14.62 
                                                        : daysOfRental > 10 && daysOfRental > 0? 13.15
                                                        : reset())
                        : calcCost['cubism'].value > 1600 && calcCost['cubism'].value <= 2000 ?
                                                        (daysOfRental <= 5 && daysOfRental > 0 ? 16.82
                                                        : daysOfRental <= 10 && daysOfRental > 0 ? 15.76 
                                                        : daysOfRental > 10 && daysOfRental > 0 ? 14.80
                                                        : reset())
                        : calcCost['cubism'].value > 2000 ?
                                                        (daysOfRental <= 5 && daysOfRental > 0 ? 18.22
                                                            : daysOfRental <= 10 && daysOfRental > 0 ? 17.10 
                                                            : daysOfRental > 10 && daysOfRental > 0 ? 16.20
                                                            : reset()) 
                        :  reset();
    premiumCost = ageCost * calcCost['cubism'].value;
    cost2 = daysOfRental * cubismCostperDay;
    displayCost.textContent = `${(premiumCost + cost2).toFixed(2)} €`;
}

function reset() {
    alert("Please enter valid information");
    displayCost.textContent = 0 +' €';
    document.getElementById('costForm').reset();
}







