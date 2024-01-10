describe("Helper functions tests (with setup and tear-down)", function() {
    beforeEach(function () {
      // Sample data setup
      allPayments = {
        'payment1': { billAmt: '100', tipAmt: '20', tipPercent: 20 },
        'payment2': { billAmt: '200', tipAmt: '40', tipPercent: 20 }
      };
    });
  
    it('should sum total tip amount from allPayments', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });
  
    it('should sum total bill amount from allPayments', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
  
    it('should sum total tip percent from allPayments', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
  
    it('should calculate tip percent correctly', function () {
      expect(calculateTipPercent(100, 23)).toEqual(23);
      expect(calculateTipPercent(111, 11)).toEqual(10); // Here we expect rounding due to Math.round
    });
  
    it('should append a td with value to a tr', function () {
      let tr = document.createElement('tr');
      appendTd(tr, 'test');
  
      expect(tr.children.length).toEqual(1);
      expect(tr.firstChild.innerText).toEqual('test');
    });
  
    afterEach(function() {
      // Teardown logic: Reset the allPayments object
      allPayments = {};
    });
  });
  