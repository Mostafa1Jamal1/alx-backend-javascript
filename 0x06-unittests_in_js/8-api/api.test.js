const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
    it('should return 200', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return "Welcome to the payment system"', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
})