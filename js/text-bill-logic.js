function textBillTotal(){
  var total = 0;
  var callsTotal = 0;
  var smsTotal = 0;

function call(billTypeEntered){
  if (billTypeEntered === "call"){
      callsTotal += 2.75
  }
}
function getCall(billTypeEntered){
  return callsTotal;
}
function sms(billTypeEntered){
  if (billTypeEntered === "sms"){
      smsTotal += 0.75;
  }
}
function getSms(billTypeEntered){
  return smsTotal;
}
function functotal(){
  return total = callsTotal + smsTotal;
}
return {
   call,
   getCall,
   sms,
   getSms,
   functotal
}

}
