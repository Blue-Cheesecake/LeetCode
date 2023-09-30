function singleNumber(nums: number[]): number {
  const appearOnceSet = new Set<number>();
  const appearMultipleTimeSet = new Set<number>();

  nums.forEach((val) => {
    if (appearMultipleTimeSet.has(val)) {
      return;
    }
    if (appearOnceSet.has(val)) {
      appearOnceSet.delete(val);
      appearMultipleTimeSet.add(val);
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
