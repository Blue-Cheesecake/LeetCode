/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let pivot = -1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      pivot = i;
      break;
    }
    if (arr[i] === arr[i + 1]) return false;
  }

  if (pivot === -1 || pivot === 0) return false;

  for (let i = pivot; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) return false;
  }
  return true;
};
