/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = "";

  let i = 0;
  while (i < s.length) {
    let base = "";

    for (let j = i; j < s.length; j++) {
      let char = s[j];

      if (!base.includes(char)) {
        base += char;
        if (j < s.length - 1) {
          continue;
        }
      }

      if (result.length < base.length) {
        result = base;
      }
      break;
    }

    i++;
  }

  // console.log(result);
  return result.length;
};
