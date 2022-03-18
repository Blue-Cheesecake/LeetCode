/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = [];

  const set = new Set();
  for (let num of nums) set.add(num);
  for (let i = 1; i < nums.length + 1; i++) if (!set.has(i)) result.push(i);

  return result;
};


