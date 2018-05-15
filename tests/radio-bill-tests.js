describe('Radio Button Bill Widget',function(){

  it('when the user selects call, it should update the the appropriate total and the global total when the ADD button in pressed.', function(){
    var radio = RadioBillFunc();

    radio.bill2('call');
    assert.equal(radio.callBill2(),2.75);
  });
  it('when the user selects sms, it should update the the appropriate total and the global total when the ADD button in pressed.', function (){
    var radio = RadioBillFunc();

    radio.bill2('sms');
    assert.equal(radio.smsBill2(),0.75);
  });
  it('should not add anything if no call or sms entered', function(){
    var radio = RadioBillFunc();

    radio.bill2('');
    assert.equal(radio.smsBill2(),0);
    assert.equal(radio.callBill2(),0);
  });
});
