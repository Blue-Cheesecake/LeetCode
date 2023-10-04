function maximumTripletValue(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < 0 && nums[j] < 0 && nums[k] < 0) {
          continue;
        }

        result = Math.max(result, (nums[i] - nums[j]) * nums[k]);
      }
    }
  }

  return result;
}
