/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  let result = -1;
  let currFreq = -1;
  const freq = new Map(); // <Number [num], Number [frequency]>

  for (let i = 0; i < nums.length - 1; i++) {
    let element = nums[i];
    if (element === key) {
      let target = nums[i + 1];
      freq.set(target, freq.has(target) ? freq.get(target) + 1 : 1);
      if (freq.get(target) >= currFreq) {
        currFreq = freq.get(target);
        result = target;
      }
    }
  }

  return result;
};
