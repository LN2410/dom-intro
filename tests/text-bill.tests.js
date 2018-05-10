describe('the Text-bill Widget',function(){
  it('should add the calls when the string call is entered', function(){
    var calltot = TextBillFunc();
    calltot.bill('call');
    assert.equal(calltot.callBill(),2.75);
  });
  it('should add the sms when the string sms is entered', function (){
    var smstot = TextBillFunc();
    smstot.bill('sms');
    assert.equal(smstot.smsBill(),0.75);
  });
  it('should not add anything if no call or sms entered', function(){
    assert.notEqual(TextBillFunc())
  });
});
