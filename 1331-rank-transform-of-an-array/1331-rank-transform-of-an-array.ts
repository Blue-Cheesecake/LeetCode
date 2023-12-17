function arrayRankTransform(arr: number[]): number[] {
  const copied = [...arr];
  copied.sort((a, b) => a - b);

  const ranks = new Map<number, number>();
  let rank = 1;

  copied.forEach((val) => {
    if (ranks.has(val)) {
      return;
    }
    ranks.set(val, rank);
    rank++;
  });

  for (let i = 0; i < arr.length; i++) {
    arr[i] = ranks.get(arr[i])!;
  }

  return arr;
}
