/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const originalHeight = [];
  heights.forEach((value) => originalHeight.push(value));
  heights.sort((a, b) => a - b);
  // console.log(originalHeight);
  // console.log(heights);
  let result = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != originalHeight[i]) result++;
  }
  return result;
};
