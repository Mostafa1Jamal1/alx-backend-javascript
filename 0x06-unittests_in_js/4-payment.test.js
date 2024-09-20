const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
    it('should call calculateNumber with type SUM', () => {
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.returns(10);

        spy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;

        expect(spy.calledWith('The total is: 10')).to.be.true;
        spy.restore();
        stub.restore();
    });
});