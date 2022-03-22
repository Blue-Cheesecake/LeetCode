/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let result = -1;

  for (let i = 0; i < s.length; i++) {
    let char1 = s.charAt(i);
    // reverse
    for (let j = s.length - 1; j >= 0; j--) {
      let char2 = s.charAt(j);
      if (j <= i) break;
      if (char1 !== char2) continue;

      let lenStr = j - i - 1;
      result = Math.max(result, lenStr);
    }
  }

  return result;
};
