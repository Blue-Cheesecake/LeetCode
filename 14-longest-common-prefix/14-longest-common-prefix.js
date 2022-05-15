/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  const base = strs[0];
  if (base === "") return "";
  let index = 0;
  let isPrefix = true;

  while (isPrefix) {
    for (const word of strs) {
      if (word.length < result.length) {
        isPrefix = false;
        result = result.substring(0, result.length - 1);
        break;
      }

      const subStr = word.substring(0, result.length);
      if (subStr !== result) {
        isPrefix = false;
        result = result.substring(0, result.length - 1);
        break;
      }
    }

    if (isPrefix) {
      result += base.charAt(index);
      index++;
    }

    if (index > base.length) {
      break;
    }
  }

  return result;
};
