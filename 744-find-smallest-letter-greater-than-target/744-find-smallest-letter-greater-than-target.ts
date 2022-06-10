function binary_search(x: string, arr: string[]): number {
  let l: number = 0;
  let r: number = arr.length - 1;
  let mid: number;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);

    if (arr[mid] === x) {
      if (mid + 1 < arr.length) {
        if (arr[mid + 1] !== x) return mid + 1;
        else l = mid + 1;
      } else return 0;
    } else if (arr[mid] > x) {
      if (mid - 1 >= 0) {
        if (arr[mid - 1] < x) return mid;
      }
      r = mid - 1;
    } else {
      if (mid + 1 < arr.length) {
        if (arr[mid + 1] > x) return mid + 1;
      }
      l = mid + 1;
    }
  }
  return 0;
}

function nextGreatestLetter(letters: string[], target: string): string {
  return letters[binary_search(target, letters)];
}
