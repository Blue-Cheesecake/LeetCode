function replaceDigits(s: string): string {
  let result = "";
  let i = 0;

  while (i < s.length) {
    const base = s[i];
    const num = s[i + 1];

    if (num === undefined) {
      result += base;
      break;
    }

    const val = Number.parseInt(num);
    const ass = base.charCodeAt(0) + val;
    const char = String.fromCharCode(ass);

    result += base;
    result += char;

    i += 2;
  }

  return result;
}
