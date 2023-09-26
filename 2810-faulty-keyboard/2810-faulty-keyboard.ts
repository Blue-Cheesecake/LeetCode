function reverseString(s: string): string {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}

function finalString(s: string): string {
  let result = "";
  for (const char of s) {
    if (char === "i") {
      result = reverseString(result);
      continue;
    }
    result += char;
  }
  return result;
}
