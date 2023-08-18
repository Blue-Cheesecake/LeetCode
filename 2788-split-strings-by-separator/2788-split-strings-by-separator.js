/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  const result = [];

  words.forEach((word) => {
    const splited = word.split(separator);
    const temp = [];
    splited.forEach((value) => {
      if (value != "") {
        temp.push(value);
      }
    });
    result.push(...temp);
  });

  return result;
};
