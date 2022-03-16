/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let n = s.length === 2 ? s.length : s.length - 1;
  for (let len = 1; len < n; len++) {
    // console.log(s.length % len);
    if (s.length % len !== 0) {
      continue;
    }
    let subString = s.slice(0, len);
    let times = s.length / len;
    let suspect = subString.repeat(times);

    if (suspect === s) {
      return true;
    }
  }
  return false;
};

