/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let i = num.length - 1;
  while (i >= 0 && num.charAt(i) == "0") {
    i--;
  }
  return num.substring(0, i + 1);
};
