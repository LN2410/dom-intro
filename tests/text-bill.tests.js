describe('should calculate the total phone bill for calls or smses and continue adding when add button is pressed',function(){
  it('should add the calls', function(){
    var calltot = textBillTotal();
    calltot.call('call');
    assert.equal(calltot.getCall(),2.75);
  });
  it('should add the sms', function (){
    var smstot = textBillTotal();
    smstot.sms('sms');
    assert.equal(smstot.getSms(),0.75);
  });
  it('should not add anything if no call or sms entered', function(){
    assert.notEqual(textBillTotal())
  });
});
