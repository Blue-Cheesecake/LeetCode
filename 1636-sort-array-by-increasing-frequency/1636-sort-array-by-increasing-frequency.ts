function frequencySort(nums: number[]): number[] {
  const freq = new Map<number, number>();
  nums.forEach((e) => {
    if (freq.has(e)) {
      freq.set(e, freq.get(e)! + 1);
      return;
    }
    freq.set(e, 1);
  });

  const arr = [...freq.entries()].sort((p1, p2) => {
    if (p1[1] != p2[1]) {
      return p1[1] - p2[1];
    }
    return p2[0] - p1[0];
  });

  const result: number[] = [];

  arr.forEach((v) => {
    for (let i = 0; i < v[1]; i++) {
      result.push(v[0]);
    }
  });

  return result;
}
