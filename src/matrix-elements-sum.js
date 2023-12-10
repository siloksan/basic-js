const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sumOfNumber = 0;
  matrix.forEach((subArray, index) => {
    if (index === 0) {
      sumOfNumber = subArray.reduce((sum, number) => {
        return sum + number;
      }, 0);
    } else {
      sumOfNumber += subArray.reduce((sum, number, subIndex) => {
        if (matrix[index - 1][subIndex] === 0) {
          return 0;
        }
        return sum + number;
      }, 0);
    }
  });
  return sumOfNumber;
}

module.exports = {
  getMatrixElementsSum,
};

  console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]))