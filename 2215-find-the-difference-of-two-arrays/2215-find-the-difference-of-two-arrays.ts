function findDifference(nums1: number[], nums2: number[]): number[][] {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const n1: number[] = [];
  const n2: number[] = [];

  s1.forEach((val) => {
    if (!s2.has(val)) {
      n1.push(val);
    }
  });

  s2.forEach((val) => {
    if (!s1.has(val)) {
      n2.push(val);
    }
  });

  return [n1, n2];
}
