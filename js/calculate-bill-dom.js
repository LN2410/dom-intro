//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element


function calculateBtnClicked(billString){

    var billItems = billString.split(",");
    var billTotal = 0;

    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    return billTotal;
  }

  function dom (){
    var billString = billStringElement.value;
    var testFun = calculateBtnClicked(billString);

    var roundedBillTotal = testFun.toFixed(2);
    console.log(roundedBillTotal);
    billTotalElement.innerHTML = roundedBillTotal;

    if (testFun >= 20.00 && testFun <= 30.00) {
        billTotalElement.classList.add('warning');
    }
    else if (testFun >= 30.00){
        billTotalElement.classList.add('danger');
      }
      else{
          billTotalElement.classList.remove('danger');
          billTotalElement.classList.remove('warning');
      }
    }    //link the function to a click event on the calculate button
calculateBtnElement.addEventListener('click', dom);
