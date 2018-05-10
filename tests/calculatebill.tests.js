  describe('the Calculate Bill Widget',function(){

    it('should return the total bill for two calls and three smses', function(){
        assert.equal(calculateBtnClicked('call, sms, call, sms, sms'),7.75);
    });
    it('should return the total bill for two smses and one call', function(){
        assert.equal(calculateBtnClicked('call, sms, sms'),4.25);
    });
    it('should return the total if no data has been provided', function(){
        assert.equal(calculateBtnClicked(''),0.00);
    });
  });
