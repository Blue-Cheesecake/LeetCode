const divergentSeries = (n: number): number => (n * (n + 1)) / 2;

function missingNumber(nums: number[]): number {
  const expectedValue: number = divergentSeries(nums.length);
  const sum: number = nums.reduce((prev, curr) => prev + curr, 0);
  return expectedValue - sum;
}
