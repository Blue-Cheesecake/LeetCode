function countPairs(nums: number[], target: number): number {
  let result = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        result++;
      } else {
        break;
      }
    }
  }

  return result;
}
