function findMaxK(nums: number[]): number {
  let result = -1;
  const set = new Set(nums);

  set.forEach((val) => {
    if (val < 0) {
      return;
    }
    const neg = -val;
    if (set.has(neg) && val > result) {
      result = val;
    }
  });

  return result;
}
