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
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callCostTotal = 0;
var smsCostTotal = 0;
//add an event listener for when the 'Update settings' button is pressed
function billSettings() {
  var textboxcall = callCostSettingElement.value;
  var textboxsms = smsCostSettingElement.value;
  var textboxwarning = warningLevelSettingElement.value;
  var textboxcritical = criticalLevelSettingElement.value;

  callCost = parseFloat(textboxcall);
  smsCost = parseFloat(textboxsms);
  warningLevel = parseFloat(textboxwarning);
  criticalLevel = parseFloat(textboxcritical);
}
updateSettingsElement.addEventListener('click',billSettings)
//add an event listener for when the add button is pressed
function radioSettingsBill() {
  var checkedRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadio){
      var billType = checkedRadio.value
      if (billType === "call"){
          callCostTotal += callCost;
      }
      else if (billType === "sms"){
          smsCostTotal += smsCost;
      }
  }
    callTotalThreeElement.innerHTML = callCostTotal.toFixed(2);
    smsTotalThreeElement.innerHTML = smsCostTotal.toFixed(2);
  var totalCostThree = smsCostTotal + callCostTotal;
  totalThreeElement.innerHTML = totalCostThree.toFixed(2);
// color change
// if (totalCostTwo >= 50.00){
//   totalTwoElement.classList.add("danger");
// }
// else if (totalCostTwo >= 30.00){
//   totalTwoElement.classList.add("warning");
// }
}
radioBillAddButtonElement.addEventListener('click', radioSettingsBill);
