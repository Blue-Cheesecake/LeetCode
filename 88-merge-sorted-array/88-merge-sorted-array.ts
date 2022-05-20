const shiftRight = (arr, start) => {
  for (let i = arr.length - 1; i > start; i--) {
    arr[i] = arr[i - 1];
  }
  arr[start] = -1;
  // console.log(arr);
};
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let index1 = 0;
  let index2 = 0;
  let currLength = m;

  while (index1 < nums1.length && index2 < n) {
    if (index1 >= currLength) {
      nums1[index1] = nums2[index2];
      index1++;
      index2++;
      currLength++;
      continue;
    }

    const ele1 = nums1[index1];
    const ele2 = nums2[index2];
    if (ele1 < ele2) {
      index1++;
      continue;
    }
    if (ele1 >= ele2) {
      shiftRight(nums1, index1);
      nums1[index1] = ele2;
      index1++;
      index2++;
      currLength++;
    }
  }
}
