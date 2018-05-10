document.addEventListener('DOMContentLoaded',function(){
  // get a reference to the textbox where the bill type is to be entered
  var billTypeTextElement = document.querySelector(".billTypeText")
  //get a reference to the add button
  var addToBillBtnElement = document.querySelector(".addToBillBtn")
  var callsTotalElement = document.querySelector(".callTotalOne")
  var smsTotalElement = document.querySelector(".smsTotalOne")
  var totalOneElement = document.querySelector(".totalOne")


  // Creating an instance of the Text Bill Factory function
  var factoryObject = TextBillFunc();

  function addUpBill() {

    var billTypeEntered = billTypeTextElement.value;

    factoryObject.bill(billTypeEntered)


    callsTotalElement.innerHTML = factoryObject.callBill().toFixed(2);
    smsTotalElement.innerHTML = factoryObject.smsBill().toFixed(2);
    totalOneElement.innerHTML = factoryObject.totalBill().toFixed(2);


  }

  function colorChanger(){
    if (factoryObject.totalBill() >= 50){
       totalOneElement.classList.add("danger");
   }
   else if (factoryObject.totalBill() >= 30){
       totalOneElement.classList.add("warning");
   }
  }

  addToBillBtnElement.addEventListener('click', function(){
      addUpBill();
      colorChanger();
  });

});
