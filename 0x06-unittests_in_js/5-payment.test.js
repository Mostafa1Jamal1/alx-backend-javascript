const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    })

    afterEach(() => {
        sinon.restore();
    })

    it('should call sendPaymentRequestToAPI with 100, and 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledWith('The total is: 120')).to.be.true;
        expect(spy.calledOnce).to.be.true;
        spy.restore();
    });

    it('should call sendPaymentRequestToAPI with 10, and 10', () => {
        sendPaymentRequestToApi(10, 10);

        expect(spy.calledWith('The total is: 20')).to.be.true;
        expect(spy.calledOnce).to.be.true;
        spy.restore();
    });
});