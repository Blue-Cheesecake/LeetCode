/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let max = 0;
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] !== colors[j]) max = Math.max(max, Math.abs(i - j));
    }
  }
  return max;
};
