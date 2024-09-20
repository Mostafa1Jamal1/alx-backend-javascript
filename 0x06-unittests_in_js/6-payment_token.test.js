const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
    it('should call getPaymentTokenFromAPI', (done) => {
        getPaymentTokenFromAPI(true).then((res) => {
            expect(res.data).to.be.equal('Successful response from the API');
            done();
        });
    });
})