// get a reference to the textbox where the bill type is to be entered
var billTypeTextElement = document.querySelector(".billTypeText")
//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn")

var callsTotalElement = document.querySelector(".callTotalOne")

var smsTotalElement = document.querySelector(".smsTotalOne")

var totalOneElement = document.querySelector(".totalOne")

// var billTotal =0;
var calltot = textBillTotal();
function DomTextbill() {

  var billTypeEntered = billTypeTextElement.value;
  // var testfunction = textBillTotal
  calltot.call(billTypeEntered);
  calltot.sms(billTypeEntered);
  




  // callsTotalElement.innerHTML = callsTotal.toFixed(2);
  // smsTotalElement.innerHTML = smsTotal.toFixed(2);
  // var totalCost = callsTotal + smsTotal;
  // totalOneElement.innerHTML = totalCost.toFixed(2);

 //  if (testfunction >= 50){
 //     totalOneElement.classList.add("danger");
 // }
 // else if (testfunction >= 30){
 //     totalOneElement.classList.add("warning");
 // }
}

addToBillBtnElement.addEventListener('click', textBillTotal);
