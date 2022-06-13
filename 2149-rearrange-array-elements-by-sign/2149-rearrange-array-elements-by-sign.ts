function rearrangeArray(nums: number[]): number[] {
  const positive: number[] = [];
  const negative: number[] = [];
  const result: number[] = [];

  nums.forEach((num: number) => {
    if (num < 0) negative.push(num);
    else positive.push(num);
  });

  let i: number = 0;
  while (i < positive.length) {
    result.push(positive[i]);
    result.push(negative[i]);

    i++;
  }

  return result;
}
