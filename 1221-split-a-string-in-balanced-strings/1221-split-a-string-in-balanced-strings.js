/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let result = 0;
  let substr = "";
  let counting = 0;
  let index = 0;

  while (index < s.length) {
    if (s.charAt(index) === "L") {
      counting--;
    } else {
      counting++;
    }
    substr += s.charAt(index);

    if (counting === 0) {
      result += 1;
      substr = "";
    }

    index++;
  }

  return result;
};
