const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexOfHeight = 0;
  const filterAndSortArr = arr.filter(height => height !== -1).sort((a, b) => a - b)
  return arr.map((item => {
    if (item === -1) {
      return item
    } else {
      indexOfHeight += 1;
      return filterAndSortArr[indexOfHeight - 1]
    }
  }))
}

module.exports = {
  sortByHeight
};

console.log(
  "sortByHeight([4, 2, 9, 11, 2, 16]): ",
  sortByHeight([4, 2, 9, 11, 2, 16])
);