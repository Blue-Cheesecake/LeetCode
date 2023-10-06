function maxSum(nums: number[]): number {
  let result = -1;

  const findMaxDigit = (num: number): number => {
    const s = num.toString();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const element = s[i];
      result = Math.max(result, Number.parseInt(element));
    }
    return result;
  };

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const si = findMaxDigit(nums[i]);
      const sj = findMaxDigit(nums[j]);

      if (si === sj) {
        const s = nums[i] + nums[j];

        console.log(`si: ${si}, sj: ${sj}, nums[i]: ${nums[i]}, nums[j]: ${nums[j]}, sum: ${s}`);

        result = Math.max(s, result);
      }
    }
  }

  return result;
}
