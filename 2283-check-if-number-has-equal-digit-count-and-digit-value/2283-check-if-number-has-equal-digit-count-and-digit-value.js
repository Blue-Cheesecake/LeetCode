/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const freq = new Map(); // <number, number>

  for (let i = 0; i < num.length; i++) {
    const val = Number(num.charAt(i));
    freq.set(val, freq.has(val) ? freq.get(val) + 1 : 1);
  }

  for (let digit = 0; digit < num.length; digit++) {
    const counting = freq.get(digit) ?? 0;
    if (Number(num.charAt(digit)) !== counting) return false;
  }

  return true;
};
