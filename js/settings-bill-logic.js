function SettingsBillFunc() {
  var callCost = 0;
  var smsCost = 0;
  var warningLevel = 0;
  var criticalLevel = 0;

  // create a variables that will keep track of all three totals.
  var callCostTotal = 0;
  var smsCostTotal = 0;
  var totalCostThree = 0;

  function settingsBillCalc(billType) {
    if (billType === "call") {
      callCostTotal += callCost;
    } else if (billType === "sms") {
      smsCostTotal += smsCost;
    }
    totalCostThree = smsCostTotal + callCostTotal;
  }

  function getCall3() {
    return callCostTotal
  }

  function getSms3() {
    return smsCostTotal
  }

  function getTotal3() {
    return totalCostThree
  }

  function setCallCost(textboxcall){
    callCost = parseFloat(textboxcall);
  }
  function setSmsCost(textboxsms){
    smsCost = parseFloat(textboxsms);
  }
  function setWarningLevel(textboxwarning){
    warningLevel = parseFloat(textboxwarning);
  }
  function setCriticalLevel (textboxcritical){
    criticalLevel = parseFloat(textboxcritical);
  }

  function reachedWarningLevel(){
    return totalCostThree > warningLevel && totalCostThree < criticalLevel;
  }

  function reachedCriticalLevel(){
    return totalCostThree >= criticalLevel;
  }

  return {
    setCallCost,
    setSmsCost,
    setWarningLevel,
    setCriticalLevel,
    bill3: settingsBillCalc,
    callBill3: getCall3,
    smsBill3: getSms3,
    totalBill3: getTotal3,
    reachedCriticalLevel,
    reachedWarningLevel
  }

}
