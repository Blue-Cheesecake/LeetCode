function reverseString(s: string): string {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}

function maximumNumberOfStringPairs(words: string[]): number {
  const memoi = new Set<string>();
  let result = 0;

  words.forEach((s) => {
    const reversed = reverseString(s);
    if (memoi.has(reversed)) {
      result++;
    }
    memoi.add(s);
  });

  return result;
}
