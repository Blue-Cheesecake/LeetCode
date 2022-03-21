/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const set = new Set(brokenLetters);
  const spl = text.split(" ");
  let result = 0;

  spl.forEach((word) => {
    let cannotType = false;
    for (let char of word)
      if (set.has(char)) {
        cannotType = true;
        break;
      }
    if (!cannotType) result++;
  });

  return result;
};
