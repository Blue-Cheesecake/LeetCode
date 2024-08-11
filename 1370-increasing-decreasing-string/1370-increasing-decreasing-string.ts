function sortString(s: string): string {
  let result = "";
  let freqs = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    freqs.set(char, (freqs.get(char) ?? 0) + 1);
  }

  const sorted = [...freqs.entries()].sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));

  while (result.length < s.length) {
    sorted.forEach((pair) => {
      if (pair[1] === 0) {
        return;
      }

      result += pair[0];
      pair[1] -= 1;
    });

    for (let i = sorted.length - 1; i >= 0; i--) {
      const pair = sorted[i];

      if (pair[1] === 0) {
        continue;
      }

      result += pair[0];
      pair[1] -= 1;
    }
  }

  return result;
}
