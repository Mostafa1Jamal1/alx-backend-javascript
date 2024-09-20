const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber with type SUM', () => {
    it('should return the sum of 1 and 3 equal 4', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return the sum of 1 and 3.7 equal 5', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should return the sum of 1 and 3.4 equal 4', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3.4), 4);
    });
    it('should return the sum of 1.2 and 3 equal 4', () => {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3), 4);
    });
    it('should return the sum of 1.5 and 3 equal 5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
    });
    it('should return the sum of 1.4999999 and 3.4999999 equal 4', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4999999, 3), 4);
    });
});

describe('calculateNumber with type SUBTRACT', () => {
    it('should return the difference between 5 and 3 equal 2', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });
    it('should return the difference between 5 and 3.7 equal 1', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 3.7), 1);
    });
    it('should return the difference between 5 and 3.4 equal 2', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 3.4), 2);
    });
    it('should return the difference between 5.2 and 3 equal 2', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5.2, 3), 2);
    });
    it('should return the difference between 5.5 and 3 equal 3', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3), 3);
    });
    it('should return the difference between 5.4999999 and 3.4999999 equal 2', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5.4999999, 3), 2);
    });
});

describe('calculateNumber with type DIVIDE', () => {
    it('should return the difference between 6 and 3 equal 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });
    it('should return the difference between 6 and 3.7 equal 1.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 6, 3.7), 1.5);
    });
    it('should return the difference between 6 and 3.4 equal 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 6, 3.4), 2);
    });
    it('should return the difference between 6.2 and 3 equal 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 6.2, 3), 2);
    });
    it('should return the difference between 5.5 and 3 equal 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5.5, 3), 2);
    });
    it('should return the difference between 6.4999999 and 3.4999999 equal 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 6.4999999, 3), 2);
    });
});
