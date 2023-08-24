/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = new Map();

  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  const comparing = new Map();

  for (const char of t) {
    if (!map.has(char)) {
      return char;
    }

    if (comparing.has(char)) {
      comparing.set(char, comparing.get(char) + 1);
    } else {
      comparing.set(char, 1);
    }
  }

  let result;
  comparing.forEach((val, key) => {
    if (map.get(key) != val) {
      result = key;
    }
  });
  return result;
};
