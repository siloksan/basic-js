const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
  if (!(arr instanceof Array)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let control = true;
  const transformArray = [];
  arr.forEach((item, index) => {
    if (item === "--discard-next") {
      control = false;
    } else if (item === "--discard-prev") {
      if (transformArray[transformArray.length - 1] === arr[index - 1]) {
        transformArray.pop();
      }
    } else if (item === "--double-next") {
      if (
        arr[index + 1] &&
        arr[index - 1] === transformArray[transformArray.length - 1]
      ) {
        transformArray.push(arr[index + 1]);
      } else {
        return;
      }
    } else if (item === "--double-prev") {
      if (
        arr[index - 1] &&
        arr[index - 1] === transformArray[transformArray.length - 1]
      ) {
        transformArray.push(arr[index - 1]);
      } else {
        return;
      }
    } else {
      control && transformArray.push(item);
      control = true;
    }
  });
  return transformArray;
}

module.exports = {
  transform,
};
