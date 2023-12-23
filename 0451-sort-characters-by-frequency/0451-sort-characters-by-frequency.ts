function frequencySort(s: string): string {
  const freq = new Map<string, number>();
  for (const char of s) {
    freq.set(char, (freq.get(char) ?? 0) + 1);
  }

  const list: [string, number][] = Array.from(freq.entries());
  list.sort((a, b) => b[1] - a[1]);

  let result = "";

  list.forEach((val) => {
    for (let i = 0; i < val[1]; i++) {
      result += val[0];
    }
  });

  return result;
}
