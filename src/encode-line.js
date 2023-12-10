const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let encodeStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i + 1] !== str[i]) {
      encodeStr += count === 1 ? str[i] : `${count}${str[i]}`;
      count = 1;
    } else {
      count += 1;
    }
  }
  return encodeStr;
}

module.exports = {
  encodeLine,
};

console.log("encodeLine('aaaatttt'): ", encodeLine("aaaatttt"));
