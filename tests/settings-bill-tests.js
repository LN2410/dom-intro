describe('Settings Bill Widget',function(){

  it('when the user updates call to 2.00 and sets the criticalLevel to 20 and the warningLevel to 10, when the update button is pressed then all totals should be updated when the user selects call.', function(){
      // alert(SettingsBillFunc);
      var settings = SettingsBillFunc();
    settings.setCallCost(2.00);
    settings.setWarningLevel(10);
    settings.setCriticalLevel(20);
    settings.bill3('call');
    assert.equal(settings.callBill3(),2.00);
  });
  it('when the user updates sms to 1.50 and sets the criticalLevel to 20 and the warningLevel to 10, when the update button is pressed then all totals should be updated when the user selects call.', function(){
    var settings = SettingsBillFunc();
    settings.setSmsCost(1.50);
    settings.setWarningLevel(10);
    settings.setCriticalLevel(20);
    settings.bill3('sms');
    assert.equal(settings.smsBill3(),1.50)
  });
  it('when the user updates sms to 3.50 , call to 0 and sets the criticalLevel to 40 and the warningLevel to 20, when the update button is pressed then should add nothing for calls when call is selected',function(){

    var settings = SettingsBillFunc();
    settings.setSmsCost(3.50);
    settings.setCallCost(0.00);
    settings.setWarningLevel(20);
    settings.setCriticalLevel(40);
    settings.bill3('sms');
    assert.equal(settings.smsBill3(),3.50);

    settings.bill3('call');
    assert.equal(settings.callBill3(),0);
  });
  it('when the user updates call and sms to 0 and sets the criticalLevel to 40 and the warningLevel to 20, when the update button is pressed then should add nothing for both calls and sms when call or sms is selected',function(){

    var settings = SettingsBillFunc();
    settings.setSmsCost(0.00);
    settings.setCallCost(0.00);
    settings.setWarningLevel(20);
    settings.setCriticalLevel(40);
    settings.bill3('sms');
    assert.equal(settings.smsBill3(),0.00);

    settings.bill3('call');
    assert.equal(settings.callBill3(),0);
  });
});