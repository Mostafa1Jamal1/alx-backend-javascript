const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with type SUM', () => {
    it('should return the sum of 1 and 3 equal 4', () => {
        expect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
    });
    it('should return the sum of 1 and 3.7 equal 5', () => {
        expect(calculateNumber('SUM', 1, 3.7)).to.be.equal(5);
    });
    it('should return the sum of 1 and 3.4 equal 4', () => {
        expect(calculateNumber('SUM', 1, 3.4)).to.be.equal(4);
    });
    it('should return the sum of 1.2 and 3 equal 4', () => {
        expect(calculateNumber('SUM', 1.2, 3)).to.be.equal(4);
    });
    it('should return the sum of 1.5 and 3 equal 5', () => {
        expect(calculateNumber('SUM', 1.5, 3)).to.be.equal(5);
    });
    it('should return the sum of 1.4999999 and 3.4999999 equal 4', () => {
        expect(calculateNumber('SUM', 1.4999999, 3)).to.be.equal(4);
    });
});

describe('calculateNumber with type SUBTRACT', () => {
    it('should return the difference between 5 and 3 equal 2', () => {
        expect(calculateNumber('SUBTRACT', 5, 3)).to.be.equal(2);
    });
    it('should return the difference between 5 and 3.7 equal 1', () => {
        expect(calculateNumber('SUBTRACT', 5, 3.7)).to.be.equal(1);
    });
    it('should return the difference between 5 and 3.4 equal 2', () => {
        expect(calculateNumber('SUBTRACT', 5, 3.4)).to.be.equal(2);
    });
    it('should return the difference between 5.2 and 3 equal 2', () => {
        expect(calculateNumber('SUBTRACT', 5.2, 3)).to.be.equal(2);
    });
    it('should return the difference between 5.5 and 3 equal 3', () => {
        expect(calculateNumber('SUBTRACT', 5.5, 3)).to.be.equal(3);
    });
    it('should return the difference between 5.4999999 and 3.4999999 equal 2', () => {
        expect(calculateNumber('SUBTRACT', 5.4999999, 3)).to.be.equal(2);
    });
});

describe('calculateNumber with type DIVIDE', () => {
    it('should return the difference between 6 and 3 equal 2', () => {
        expect(calculateNumber('DIVIDE', 6, 3)).to.be.equal(2);
    });
    it('should return the difference between 6 and 3.7 equal 1.5', () => {
        expect(calculateNumber('DIVIDE', 6, 3.7)).to.be.equal(1.5);
    });
    it('should return the difference between 6 and 3.4 equal 2', () => {
        expect(calculateNumber('DIVIDE', 6, 3.4)).to.be.equal(2);
    });
    it('should return the difference between 6.2 and 3 equal 2', () => {
        expect(calculateNumber('DIVIDE', 6.2, 3)).to.be.equal(2);
    });
    it('should return the difference between 5.5 and 3 equal 2', () => {
        expect(calculateNumber('DIVIDE', 5.5, 3)).to.be.equal(2);
    });
    it('should return the difference between 6.4999999 and 3.4999999 equal 2', () => {
        expect(calculateNumber('DIVIDE', 6.4999999, 3)).to.be.equal(2);
    });
    it('should return Error when we try to divide 6.4999999 by 0.4999999', () => {
        expect(calculateNumber('DIVIDE', 6.4999999, 0.4999999)).to.be.equal('Error');
    });
});
