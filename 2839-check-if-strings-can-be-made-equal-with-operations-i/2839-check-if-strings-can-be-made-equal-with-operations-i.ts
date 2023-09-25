function replaceAt(origin: string, index: number, replacement: string): string {
  return origin.substring(0, index) + replacement + origin.substring(index + replacement.length);
}
function swap(s: string, i: number, j: number): string {
  let a = s[i];
  let b = s[j];
  s = replaceAt(s, i, b);
  s = replaceAt(s, j, a);
  return s;
}

function canBeEqual(s1: string, s2: string): boolean {
  if (s1 === s2) {
    return true;
  }
  if (swap(s1, 0, 2) === s2) {
    return true;
  }
  if (swap(s1, 1, 3) === s2) {
    return true;
  }
  if (swap(swap(s1, 0, 2), 1, 3) === s2) {
    return true;
  }
  if (swap(swap(s1, 1, 3), 0, 2) === s2) {
    return true;
  }
  return false;
}
