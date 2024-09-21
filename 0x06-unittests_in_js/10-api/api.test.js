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

describe('Cart page', () => {
    it('should return 404 when id is not a number', (done) => {
        request('http://localhost:7865/cart/notANumber', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    it('should return 200 when id is a number', (done) => {
        request('http://localhost:7865/cart/123', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 123');
            done();
        });
    });

    it('should return 200 when id is a float', (done) => {
        request('http://localhost:7865/cart/1.23', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return 404 when no id', (done) => {
        request('http://localhost:7865/cart/', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
})

describe('Available payments page', () => {
    it('should return 200 and correct body', (done) => {
        request('http://localhost:7865/available_payments', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
            done();
        });
    });
})

describe('Login page', () => {
    it('should return 200 and correct body', (done) => {
        const options = {
            method: 'POST',
            url: 'http://localhost:7865/login',
            Headers: {
                'Content-Type': 'application/json'
            },
            json: {
                userName: 'user',
            }
        }
        request(options, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome user');
            done();
        });
    });
})