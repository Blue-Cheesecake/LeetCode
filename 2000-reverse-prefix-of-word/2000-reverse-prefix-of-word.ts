function reverseString(s: string): string {
  let r = "";
  for (let i = s.length - 1; i >= 0; i--) {
    r += s[i];
  }
  return r;
}

function reversePrefix(word: string, ch: string): string {
  let fIndex = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      fIndex = i;
      break;
    }
  }

  let prefix = reverseString(word.substring(0, fIndex + 1));
  let suffix = word.substring(fIndex + 1);

  return prefix + suffix;
}
