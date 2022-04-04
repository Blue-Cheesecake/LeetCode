/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const arr1 = [];
  const arr2 = [];
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  for (let num1 of s1) if (!s2.has(num1)) arr1.push(num1);
  for (let num2 of s2) if (!s1.has(num2)) arr2.push(num2);
  return [arr1, arr2];
};
