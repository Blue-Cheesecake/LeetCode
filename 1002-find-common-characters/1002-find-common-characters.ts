function findFreq(word: string): Map<string, number> {
  const freq = new Map<string, number>();
  for (const char of word) {
    freq.set(char, (freq.get(char) ?? 0) + 1);
  }
  return freq;
}

function commonChars(words: string[]): string[] {
  const result: string[] = [];
  const freqs: Map<string, number>[] = [];
  words.forEach((word) => freqs.push(findFreq(word)));
  const base = freqs[0];

  base.forEach((val, key) => {
    let isCommon = true;
    let min = val;

    for (const freq of freqs) {
      if (!freq.has(key)) {
        isCommon = false;
        break;
      }
      min = Math.min(min, freq.get(key)!);
    }

    if (isCommon) {
      for (let i = 0; i < min; i++) {
        result.push(key);
      }
    }
  });

  return result;
}
