function countPrefixes(words: string[], s: string): number {
  let result: number = 0;
  words.forEach((word) => {
    if (word.length <= s.length) {
      if (s.substring(0, word.length) === word) {
        result++;
      }
    }
  });
  return result;
}
