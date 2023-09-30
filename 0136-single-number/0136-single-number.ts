function singleNumber(nums: number[]): number {
  const appearOnceSet = new Set<number>();

  nums.forEach((val) => {
    if (appearOnceSet.has(val)) {
      appearOnceSet.delete(val);
      return;
    }
    appearOnceSet.add(val);
  });

  let result = 0;
  appearOnceSet.forEach((val) => {
    result = val;
  });
  return result;
}
