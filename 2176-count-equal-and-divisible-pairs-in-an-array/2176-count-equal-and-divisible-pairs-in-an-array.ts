function countPairs(nums: number[], k: number): number {
  let result = 0;
  nums.forEach((numsi, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      if (numsi === nums[j] && (i * j) % k === 0) {
        result++;
      }
    }
  });
  return result;
}
