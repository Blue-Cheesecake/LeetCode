/**
 * @param {number} num
 * @return {boolean}
 */
const sum_of_squares = (num) => {
  let str = String(num);
  let sum = 0;
  for (const char of str) {
    sum += Number(char) * Number(char);
  }
  return sum;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  let curr = n;
  while (!set.has(curr)) {
    let s = sum_of_squares(curr);
    if (s === 1) return true;
    else {
      set.add(curr);
      curr = s;
    }
  }
  return false;
};
