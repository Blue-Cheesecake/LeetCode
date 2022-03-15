/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // find degree of array
  // get the element having that degree
  // find the sub array

  let degree_of_arr = -1;
  const map = new Map();

  for (const num of nums) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    if (map.get(num) > degree_of_arr) {
      degree_of_arr = map.get(num);
    }
  }

  /**
   * @param {number} element
   * @param {Array} nums
   */
  const path = (element, nums) => {
    let left = -1;
    let right = -1;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === element) {
        left = i;
        break;
      }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] === element) {
        right = i;
        break;
      }
    }

    return right - left + 1;
  };

  let min = nums.length;
  for (const number of map.keys()) {
    if (map.get(number) === degree_of_arr) {
      min = Math.min(min, path(number, nums));
    }
  }
  return min;
};
