function removeSubstring(s: string, i: number, j: number): string {
  return s.substring(0, i) + s.substring(j + 1);
}

function minLength(s: string): number {
  let rms = ["AB", "CD"];

  let isFound: boolean;

  do {
    isFound = false;
    for (let i = 0; i < s.length - 1; i++) {
      let sub = s.substring(i, i + 2);
      if (rms.includes(sub)) {
        s = removeSubstring(s, i, i + 1);
        isFound = true;
        break;
      }
    }
  } while (isFound);

  return s.length;
}
