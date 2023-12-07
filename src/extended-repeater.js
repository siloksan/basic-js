const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;
  let newSeparator = separator ? separator : "+";
  let newAdditionSeparator = additionSeparator ? additionSeparator : "|";

  function transformToString(string, splitter, quantity) {
    if (string === undefined) return "";
    let newString = string;
    for (let i = 1; i < quantity; i += 1) {
      newString += splitter + string;
    }
    return newString;
  }
  const strPlusAddition =
    str +
    transformToString(addition, newAdditionSeparator, additionRepeatTimes);
  return transformToString(strPlusAddition, newSeparator, repeatTimes);
}

module.exports = {
  repeater,
};
