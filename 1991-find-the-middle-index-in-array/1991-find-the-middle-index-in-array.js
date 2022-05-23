/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const prefixForward = [];
  const prefixBackward = [];
  let i = 0;
  let sum1 = 0;
  let j = nums.length - 1;
  let sum2 = 0;
  while (i < nums.length) {
    sum1 += nums[i];
    sum2 += nums[j];
    prefixForward.push(sum1);
    prefixBackward.push(sum2);
    i++;
    j--;
  }
  prefixBackward.reverse();

  for (let i = 0; i < prefixForward.length; i++) {
    if (prefixForward[i] === prefixBackward[i]) return i;
  }

  return -1;
};
