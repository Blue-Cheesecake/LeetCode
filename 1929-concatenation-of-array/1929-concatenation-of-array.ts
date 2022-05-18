function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) nums.push(nums[i]);
  return nums;
}

const nums = [1, 2, 1];
console.log(getConcatenation(nums));
