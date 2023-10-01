function isAcronym(words: string[], s: string): boolean {
  if (s.length !== words.length) {
    return false;
  }

  let isInvalid = true;
  words.forEach((word, index) => {
    if (word[0] !== s[index]) {
      isInvalid = false;
    }
  });

  return isInvalid;
}
