function binarySearch(arr: number[], x: number): number {
  let l = 0;
  let r = arr.length - 1;
  let mid: number;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] > x) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
}

function searchMatrix(matrix: number[][], target: number): boolean {
  for (const arr of matrix) {
    const ret = binarySearch(arr, target);
    if (ret !== -1) {
      return true;
    }
  }

  return false;
}
