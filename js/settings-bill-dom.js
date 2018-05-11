// get a reference to the sms or call radio buttons
var callTotalThreeElement = document.querySelector(".callTotalSettings");
var smsTotalThreeElement = document.querySelector(".smsTotalSettings");
var totalThreeElement = document.querySelector(".totalSettings");
// get refences to all the settings fields
var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var radioBillAddButtonElement = document.querySelector(".radioBillAddButton");
//get a reference to the 'Update settings' button
var updateSettingsElement = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
//add an event listener for when the 'Update settings' button is pressed
var factoryObject3 = SettingsBillFunc();

function billSettings() {

  var textboxcall = callCostSettingElement.value;
  var textboxsms = smsCostSettingElement.value;
  var textboxwarning = warningLevelSettingElement.value;
  var textboxcritical = criticalLevelSettingElement.value;

  factoryObject3.setCallCost(textboxcall);
  factoryObject3.setSmsCost(textboxsms);
  factoryObject3.setCriticalLevel(textboxcritical);
  factoryObject3.setWarningLevel(textboxwarning);

  // if (totalCostThree <= criticalLevel) {
  //   totalThreeElement.classList.remove("danger");
  //   radioBillAddButtonElement.disabled = false;
  // }
  // if (totalCostThree <= warningLevel) {
  //   totalThreeElement.classList.remove("warning");
  // }

}
updateSettingsElement.addEventListener('click', billSettings)
//add an event listener for when the add button is pressed

function radioSettingsBill() {

  if (factoryObject3.reachedCriticalLevel()){
    return;
  }

  totalThreeElement.classList.remove("warning");
  totalThreeElement.classList.remove("danger");

  var checkedRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  //if (checkedRadio){
  var billType = checkedRadio.value
  //}
  factoryObject3.bill3(billType);

  callTotalThreeElement.innerHTML = factoryObject3.callBill3().toFixed(2);
  smsTotalThreeElement.innerHTML = factoryObject3.smsBill3().toFixed(2);
  totalThreeElement.innerHTML = factoryObject3.totalBill3().toFixed(2);

  // color change
  if (factoryObject3.reachedWarningLevel()) {
    totalThreeElement.classList.add("warning");
  } else if (factoryObject3.reachedCriticalLevel()) {
    totalThreeElement.classList.add("danger");
  }
  // else {
  //   radioBillAddButtonElement.disabled = false;
  // }
}
radioBillAddButtonElement.addEventListener('click', radioSettingsBill);
