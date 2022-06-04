function count_negatives_binary(arr: Array<number>): number {
  let l = 0;
  let r = arr.length - 1;
  let count = 0;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    // move toward right if right side is not negative
    if (arr[mid] >= 0) {
      if (mid + 1 < arr.length) {
        if (arr[mid + 1] < 0) return arr.length - mid - 1;
        else l = mid + 1;
      } else {
        return 0;
      }
    } else {
      // move toward left if left side is not positive
      if (mid - 1 >= 0) {
        if (arr[mid - 1] >= 0) return arr.length - mid;
        else r = mid - 1;
      } else {
        return arr.length;
      }
    }
  }
  return count;
}

function countNegatives(grid: number[][]): number {
  let result: number = 0;

  for (const arr of grid) {
    result += count_negatives_binary(arr);
  }

  return result;
}
