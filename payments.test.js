describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // Initialization logic for payment tests
      billAmtInput.value = '100';
      tipAmtInput.value = '15';
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      let payment = allPayments['payment' + paymentId];
      expect(payment.billAmt).toEqual('100');
      expect(payment.tipAmt).toEqual('15');
      expect(payment.tipPercent).toEqual(15);
    });
  
    afterEach(function() {
      // Teardown logic: Reset the payment data
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      summaryTds.forEach(function(td) { td.innerHTML = ''; });
      billAmtInput.value = '';
      tipAmtInput.value = '';
    });
  });
  
  // More payment tests would continue here...
  