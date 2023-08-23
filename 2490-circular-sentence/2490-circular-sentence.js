/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const splited = sentence.split(" ");
  const size = splited.length;

  // The last character of the last word is equal to the first character of the first word.
  if (
    splited[0].charAt(0) !=
    splited[size - 1].charAt(splited[size - 1].length - 1)
  ) {
    return false;
  }

  for (let i = 0; i < splited.length - 1; i++) {
    const s1 = splited[i];
    const s2 = splited[i + 1];

    // The last character of a word is equal to the first character of the next word.
    if (s1.charAt(s1.length - 1) != s2.charAt(0)) {
      return false;
    }
  }

  return true;
};
