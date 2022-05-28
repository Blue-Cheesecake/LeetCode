function intersection(nums: number[][]): number[] {
  let result: Array<number> = [];
  const map: Map<number, number> = new Map<number, number>();
  const n: number = nums.length;

  nums.forEach((arr) => {
    arr.forEach((value) => {
      map.has(value) ? map.set(value, map.get(value)! + 1) : map.set(value, 1);
      if (map.get(value)! === n) result.push(value);
    });
  });

  result.sort((a, b) => a - b);
  return result;
}
