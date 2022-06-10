function countElements(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let result: number = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    const num = nums[i];
    if (nums[0] === num || nums[nums.length - 1] === num) continue;
    result++;
  }
  return result;
}
