function numberGame(nums: number[]): number[] {
  nums.sort((a, b) => { return a - b });

  let i = 0;
  while (i < nums.length) {
    const temp = nums[i + 1]
    nums[i + 1] = nums[i]
    nums[i] = temp
    i += 2
  }

  return nums
};
