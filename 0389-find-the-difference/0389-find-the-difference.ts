const findFreq = (s) => {
  const map = new Map();

  for (const element of s) {
    let prev = map.get(element);
    if (prev == undefined) {
      prev = 1;
    } else {
      prev += 1;
    }

    map.set(element, prev);
  }

  return map;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const fs = findFreq(s);
  const ft = findFreq(t);

  let result = "";
  ft.forEach((val, key) => {
    if (!fs.has(key) || fs.get(key) !== val) {
      result = key;
      return;
    }
  });
  return result;
};
