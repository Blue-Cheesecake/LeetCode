/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let result = [-1, -1]; // [0] = duplicated number, [1] = missing number
  let sum = 0;
  const set = new Set();

  for (let num of nums) {
    // Not duplicate
    if (!set.has(num)) {
      set.add(num);
      sum += num;
      continue;
    }

    // Duplicated num
    result[0] = num;
  }

  let n = nums.length;
  let expectSum = (n * (n + 1)) / 2;
  let missingNum = expectSum - sum;
  result[1] = missingNum;

  return result;
};

