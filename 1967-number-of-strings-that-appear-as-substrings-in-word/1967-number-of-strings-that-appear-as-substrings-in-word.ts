function numOfStrings(patterns: string[], word: string): number {
  let result = 0;

  patterns.forEach((pattern) => {
    if (word.includes(pattern)) {
      result++;
    }
  });

  return result;
}
