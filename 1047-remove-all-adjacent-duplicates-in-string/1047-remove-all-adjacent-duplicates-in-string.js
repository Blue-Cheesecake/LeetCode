/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let result = "";

  for (const c of s) {
    if (result.length != 0 && result.endsWith(c)) {
      result = result.substring(0, result.length - 1);
      continue;
    }
    result += c;
  }

  return result;
};
