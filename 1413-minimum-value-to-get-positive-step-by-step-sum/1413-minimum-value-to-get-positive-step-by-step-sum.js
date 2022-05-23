/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  const prefixSum = [];
  let sum = 0;
  let isContainNegativeZero = false;
  let min = 1;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < min) min = sum;
    if (sum <= 0) isContainNegativeZero = true;
    prefixSum.push(sum);
  }
  if (!isContainNegativeZero) return 1;
  return min * -1 + 1;
};
