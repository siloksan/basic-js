const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let isArray = Object.prototype.toString.call(arr) === "[object Array]";
    if (!isArray) {
      return 0;
    }
    let countDepth = 1;
    arr.forEach((item) => {
        const subArrayCount = this.calculateDepth(item) + 1;
        countDepth = countDepth < subArrayCount ? subArrayCount : countDepth;
    });
    return countDepth;
  }
}

module.exports = {
  DepthCalculator,
};

const depthCalc = new DepthCalculator();
