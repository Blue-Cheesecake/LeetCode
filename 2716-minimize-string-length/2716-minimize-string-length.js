/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  const set = new Set();

  for (const element of s) {
    const c = element;

    if (!set.has(c)) {
      set.add(c);
    }
  }

  return set.size;
};
