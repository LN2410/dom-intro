function TextBillFunc(){
  var total = 0;
  var callsTotal = 0;
  var smsTotal = 0;

  function billCalculator(billTypeEntered){
    if (billTypeEntered === "call"){
      callsTotal += 2.75
    }else if (billTypeEntered === "sms"){
      smsTotal += 0.75;
    }
    total = callsTotal + smsTotal;
  }
  function getCall(){
    return callsTotal;
  }
  function getSms(){
    return smsTotal;
  }
  function getTotal(){
    return total;
  }

  return {
    bill : billCalculator,
    callBill : getCall,
    smsBill : getSms,
    totalBill : getTotal
  }
}
