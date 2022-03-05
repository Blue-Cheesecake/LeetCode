/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  let memoi = new Set();

  for (const word of words) {
    let transformed = "";
    for (const char of word)
      transformed += morseCode[char.charCodeAt(0) - "a".charCodeAt(0)];
    memoi.add(transformed);
  }

  return memoi.size;
};
