function replaceAt(s, index, replacement) {
  return (
    s.substring(0, index) +
    replacement +
    s.substring(index + replacement.length)
  );
}

/**
 * @param {string} char
 * @return {boolean}
 */
function isVowels(char) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return vowels.indexOf(char) != -1;
}

/**
 * @param {string} s
 * @return {string}
 */
let sortVowels = function (s) {
  const vowels = [];
  for (const char of s) {
    if (isVowels(char)) {
      vowels.push(char);
    }
  }

  const sorted = vowels.sort((a, b) => {
    return a.charCodeAt(0) - b.charCodeAt(0);
  });

  let i = 0;
  for (let j = 0; j < s.length; j++) {
    const element = s[j];

    if (isVowels(element)) {
      // replace
      s = replaceAt(s, j, sorted[i]);
      i += 1;
    }
  }

  return s;
};
