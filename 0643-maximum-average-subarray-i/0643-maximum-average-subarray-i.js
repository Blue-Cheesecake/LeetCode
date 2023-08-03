/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let result = Number.MIN_SAFE_INTEGER;

  let sum = 0;
  for (let i = 0; i < k; i++) {
    const num = nums[i];
    sum += num;
  }

  let avg = sum / k;

  result = Math.max(result, avg);

  for (let i = k; i < nums.length; i++) {
    let left = nums[i - k];
    let right = nums[i];

    sum -= left;
    sum += right;
    avg = sum / k;
    result = Math.max(result, avg);
  }

  return result;
};
