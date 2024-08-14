function kthDistinct(arr: string[], k: number): string {
  let bannedSet = new Set();
  let distictMap = new Map<string, number>();

  arr.forEach((val, index) => {
    if (bannedSet.has(val)) {
      return;
    }
    if (distictMap.has(val)) {
      bannedSet.add(val);
      distictMap.delete(val);
      return;
    }
    distictMap.set(val, index);
  });

  let sortedMap = [...distictMap.entries()].sort((p1, p2) => p1[1] - p2[1]);

  if (k - 1 < sortedMap.length) {
    return sortedMap[k - 1][0];
  }
  return "";
}
