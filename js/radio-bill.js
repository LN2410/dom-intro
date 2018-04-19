// get a reference to the sms or call radio buttons
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");
//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callsTotalTwo = 0;
var smsTotalTwo = 0;
//add an event listener for when the add button is pressed
  function radioBill() {
    console.log(radioBill);
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
        if (billItemType === "call"){
            callsTotalTwo += 2.75;
        }
        else if (billItemType === "sms"){
            smsTotalTwo += 0.75;
        }
    }
    callTotalTwoElement.innerHTML = callsTotalTwo.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalTwo.toFixed(2);
    var totalCostTwo = smsTotalTwo + callsTotalTwo;
    totalTwoElement.innerHTML = totalCostTwo.toFixed(2);
 // color change
 if (totalCostTwo >= 50.00){
    totalTwoElement.classList.add("danger");
 }
 else if (totalCostTwo >= 30.00){
    totalTwoElement.classList.add("warning");
 }
  }
radioBillAddBtnElement.addEventListener('click', radioBill);
