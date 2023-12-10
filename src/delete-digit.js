const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nToString = n + '';
  let maxNumber = 0;
  for (let i = 0; i < nToString.length; i += 1) {
    const remainingNumber = nToString.slice(0, i) + nToString.slice(i + 1);
    maxNumber = Math.max(maxNumber, +remainingNumber);
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
