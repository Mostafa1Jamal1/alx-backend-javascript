const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of 1 and 3 equal 4', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('should return the sum of 1 and 3.7 equal 5', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it('should return the sum of 1 and 3.4 equal 4', () => {
        assert.strictEqual(calculateNumber(1, 3.4), 4);
    });
    it('should return the sum of 1.2 and 3 equal 4', () => {
        assert.strictEqual(calculateNumber(1.2, 3), 4);
    });
    it('should return the sum of 1.5 and 3 equal 5', () => {
        assert.strictEqual(calculateNumber(1.5, 3), 5);
    });
    it('should return the sum of 1.4999999 and 3.4999999 equal 4', () => {
        assert.strictEqual(calculateNumber(1.4999999, 3), 4);
    });
});
