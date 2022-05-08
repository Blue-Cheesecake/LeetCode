/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let concat = "";
  for (let i = 0; i < words.length; i++) {
    concat += words[i];
    if (concat.length > s.length) return false;
    if (concat === s) break;
  }
  return concat === s;
};
