document.addEventListener('DOMContentLoaded',function(){
// get a reference to the sms or call radio buttons
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");
//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");

// Creating an instance of the Text Bill Factory function
  var factoryObject2 = RadioBillFunc();

  function addBill(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
    factoryObject2.bill2(billItemType)
}
    callTotalTwoElement.innerHTML = factoryObject2.callBill2().toFixed(2);
    smsTotalTwoElement.innerHTML = factoryObject2.smsBill2().toFixed(2);
    totalTwoElement.innerHTML = factoryObject2.totalBill2().toFixed(2);
}
 // color change
 function color(){
 if (factoryObject2.totalBill2() >= 50.00){
    totalTwoElement.classList.add("danger");
 }
 else if (factoryObject2.totalBill2() >= 30.00){
    totalTwoElement.classList.add("warning");
 }
}
radioBillAddBtnElement.addEventListener('click', function(){
  addBill();
  color();
});
});
