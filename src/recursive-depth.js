const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
        while (arr.some(i => Array.isArray(i))) {
            arr = arr.flat();
            count++;
        }
        return count;
	}
};