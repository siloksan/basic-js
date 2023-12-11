const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const field = matrix.map((subArray, index) => {
    return subArray.map((item, indexSubArray) => {
      countOfMine = 0;
      if (index > 0) {
        if (indexSubArray > 0) {
          if (matrix[index - 1][indexSubArray - 1]) {
            countOfMine += 1;
          }
        }
        if (matrix[index - 1][indexSubArray]) {
          countOfMine += 1;
        }
        if (indexSubArray < subArray.length - 1) {
          if (matrix[index - 1][indexSubArray + 1]) {
            countOfMine += 1;
          }
        }
      }
      if (matrix[index][indexSubArray - 1]) {
        if (indexSubArray > 0) countOfMine += 1;
      }
      if (matrix[index][indexSubArray + 1]) {
        if (indexSubArray < subArray.length - 1) countOfMine += 1;
      }
      if (index < matrix.length - 1) {
        if (matrix[index + 1][indexSubArray - 1]) {
          if (indexSubArray > 0) countOfMine += 1;
        }
        if (matrix[index + 1][indexSubArray]) {
          countOfMine += 1;
        }
        if (matrix[index + 1][indexSubArray + 1]) {
          if (indexSubArray < subArray.length - 1) countOfMine += 1;
        }
      }
      return countOfMine;
    });
  });
  return field;
}

module.exports = {
  minesweeper,
};