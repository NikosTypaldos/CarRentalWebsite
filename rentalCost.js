const calcCost = {
    button: document.querySelector('#calcCost'),
    displayCost: document.querySelector('#displayCost'),
    cubism: document.querySelector('#engineDisplacement'),
    driverAge: document.querySelector('#selectAge'),
    pickupDate: document.querySelector('#fromDate'),
    dropOffDate: document.querySelector('#toDate')
}

calcCost['button'].onclick = () => {
    var daysOfRental =  (calcCost.dropOffDate.valueAsDate - calcCost.pickupDate.valueAsDate) / (1000 * 3600 * 24);
    var ageCost = calcCost['driverAge'].value >= 18 && calcCost['driverAge'].value < 22 ? (calcCost['driverAge'].value * 0.00042)
                : calcCost['driverAge'].value >= 22 && calcCost['driverAge'].value < 30 ? (calcCost['driverAge'].value * 0.00036)
                : calcCost['driverAge'].value >= 30 ? (calcCost['driverAge'].value * 0.00023)
                : (alert("Please select an age range"), ageCost = 0);
    var cubismCostperDay = calcCost['cubism'].value <= 1600 ? 
                                                        ( daysOfRental <= 5 && daysOfRental > 0 ? 15.42
                                                        : daysOfRental <= 10 && daysOfRental > 0? 14.62 
                                                        : daysOfRental > 10 && daysOfRental > 0? 13.15
                                                        : undefined)
                        : calcCost['cubism'].value > 1600 && calcCost['cubism'].value <= 2000 ?
                                                        (daysOfRental <= 5 && daysOfRental > 0 ? 16.82
                                                        : daysOfRental <= 10 && daysOfRental > 0 ? 15.76 
                                                        : daysOfRental > 10 && daysOfRental > 0 ? 14.80
                                                        : undefined)
                        : calcCost['cubism'].value > 2000 ?
                                                        ((daysOfRental <= 5 && daysOfRental > 0 ? 18.22
                                                            : daysOfRental <= 10 && daysOfRental > 0 ? 17.10 
                                                            : daysOfRental > 10 && daysOfRental > 0 ? 16.20
                                                            : undefined))
                        : (alert("Invalid Date or Engine displacement (Cubism)\n Please try again!"), cubismCostperDay = "invalid", daysOfRental = "invalid");
    const cost1 = ageCost * calcCost['cubism'].value;
    const cost2 = daysOfRental * cubismCostperDay;
    console.log(cost2);
    calcCost['displayCost'].textContent = `${(cost1 + cost2).toFixed(2)} €`;

}








