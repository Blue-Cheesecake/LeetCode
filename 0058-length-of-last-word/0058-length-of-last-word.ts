function lengthOfLastWord(s: string): number {
  const trimpped = s.trimEnd();
  let result = 0;

  for (let i = trimpped.length - 1; i >= 0; i--) {
    const c = trimpped.charAt(i);
    if (c === " ") {
      return result;
    }
    result++;
  }

  return result;
}

