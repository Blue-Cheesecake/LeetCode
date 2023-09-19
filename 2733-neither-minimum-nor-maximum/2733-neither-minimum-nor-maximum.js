/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b);

  if (sortedArr.length <= 2) {
    return -1;
  }

  let median = parseInt(sortedArr.length / 2);

  if (sortedArr.length % 2 == 1) {
    return sortedArr[median];
  }

  let left = median - 1;
  let right = median;

  console.log(median, left, right);

  if (left != sortedArr[0] && left != sortedArr[sortedArr.length - 1]) {
    return sortedArr[left];
  }
  if (right != sortedArr[0] && right != sortedArr[sortedArr.length - 1]) {
    return sortedArr[right];
  }
};
