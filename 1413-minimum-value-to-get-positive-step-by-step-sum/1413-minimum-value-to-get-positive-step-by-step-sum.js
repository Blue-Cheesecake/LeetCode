/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  const prefixSum = [];
  let sum = 0;
  let isContainNegativeZero = false;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum <= 0) isContainNegativeZero = true;
    prefixSum.push(sum);
  }
  if (!isContainNegativeZero) return 1;

  // console.log(prefixSum);
  // find index of lowest value
  let index = 0;
  for (let i = 1; i < prefixSum.length; i++) {
    if (prefixSum[i] < prefixSum[index]) index = i;
  }
  return prefixSum[index] * -1 + 1;
};
