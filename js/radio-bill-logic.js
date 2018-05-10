function RadioBillFunc() {
  var callsTotalTwo = 0;
  var smsTotalTwo = 0;
  var totalTwo = 0;

function radioBillCalc (billItemType){

      if (billItemType === "call"){
          callsTotalTwo += 2.75;
      }
      else if (billItemType === "sms"){
          smsTotalTwo += 0.75;
      }
      totalTwo = smsTotalTwo + callsTotalTwo;
    }


  function getCall2(){
    return callsTotalTwo;
  }

  function getSms2(){
    return smsTotalTwo;
  }

  function getTotal2(){
    return totalTwo;
  }
  return {
    bill2 : radioBillCalc,
    callBill2 : getCall2,
    smsBill2 : getCall2,
    totalBill2 : getTotal2
  }
  }
