/**
 * sort in place
 * @param {number[]} arr
 */
const sort_odd_indices = (arr) => {
  for (let i = 1; i < arr.length; i += 2) {
    let maxIndex = i;
    for (let j = i + 2; j < arr.length; j += 2) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }
};

/**
 * sort in place
 * @param {number[]} arr
 */
const sort_even_indices = (arr) => {
  for (let i = 0; i < arr.length; i += 2) {
    let minIndex = i;
    for (let j = i + 2; j < arr.length; j += 2) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  sort_odd_indices(nums);
  sort_even_indices(nums);
  return nums;
};
