/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const base = [];
  if (n % 2 == 1) {
    base.push(0);
    for (let i = 1; i <= (n - 1) / 2; i++) {
      base.push(i);
      base.push(-i);
    }
    return base;
  }

  for (let i = 1; i <= n / 2; i++) {
    base.push(i);
    base.push(-i);
  }
  return base;
};
