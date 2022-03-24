/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map(); // <element, index>
  for (let i = 0; i < nums.length; i++) {
    // check if it contains
    let num = nums[i];
    if (map.has(num)) {
      let j = map.get(num);
      if (Math.abs(i - j) <= k) return true;
    }
    map.set(num, i);
  }
  return false;
};
