function maxPower(s: string): number {
  let result = 0;

  let i = 0;
  while (i < s.length) {
    const base = s[i];
    let temp = 0;
    let j = i;
    while (s[j] === base) {
      temp++;
      j++;
    }

    result = Math.max(result, temp);
    i = j;
  }

  return result;
}
