const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let newS2 = s2;
  const matchCharacters = [];
  for (let i = 0; i < s1.length; i += 1) {
    let indexOfMatching = newS2.indexOf(s1[i]);
    if (indexOfMatching >= 0) {
      matchCharacters.push(newS2[indexOfMatching]);
      newS2 =
        newS2.slice(0, indexOfMatching) +
        newS2.slice(indexOfMatching + 1);
    }
  }
  return matchCharacters.length;
}

module.exports = {
  getCommonCharacterCount,
};

console.log(
  "getCommonCharacterCount('zzzz', 'zzzzzzz')",
  getCommonCharacterCount("aabcc", "adcaa")
);