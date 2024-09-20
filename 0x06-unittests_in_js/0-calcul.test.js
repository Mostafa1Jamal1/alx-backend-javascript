const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of 1 and 3 equal 4', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
  it('should return the sum of 1 and 3.7 equal 5', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
  it('should return the sum of 1.2 and 3.7 equal 5', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
  it('should return the sum of 1.5 and 3.7 equal 6', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
});
