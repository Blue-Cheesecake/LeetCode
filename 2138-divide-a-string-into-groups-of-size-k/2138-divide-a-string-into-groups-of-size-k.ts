function divideString(s: string, k: number, fill: string): string[] {
  let result: string[] = [];
  let str = "";
  let d = k - (s.length % k);
  if (d == k) {
    d = 0;
  }

  for (let i = 0; i < s.length + d; i++) {
    if (i < s.length) {
      const c = s[i];
      str += c;
    } else {
      str += fill;
    }
    if (str.length == k) {
      result.push(str);
      str = "";
    }
  }

  return result;
}
