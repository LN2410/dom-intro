// get a reference to the textbox where the bill type is to be entered
var billTypeTextElement = document.querySelector(".billTypeText")
//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn")

var callsTotalElement = document.querySelector(".callTotalOne")

var smsTotalElement = document.querySelector(".smsTotalOne")

var totalOneElement = document.querySelector(".totalOne")
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
// var billTotal =0;
//add an event listener for when the add button is pressed
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElement.value;
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
       totalOneElement.classList.add("danger");
   }
   else if (totalCost >= 30){
       totalOneElement.classList.add("warning");
   }
}
addToBillBtnElement.addEventListener('click', textBillTotal);
