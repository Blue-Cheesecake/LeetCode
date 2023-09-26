function findCharFromLastPosition(s: string, c: string): number {
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      return i;
    }
  }
  return -1;
}

function findPartiion(s: string, startIndex: number): string {
  if (startIndex >= s.length) {
    return "";
  }
  if (startIndex === s.length - 1) {
    return s[startIndex];
  }

  let base = s[startIndex];
  let lastIndex = findCharFromLastPosition(s, base);

  if (startIndex === lastIndex) {
    return base;
  }

  // verify that all chars are in range [startIndex] - [anotherPos]
  let i = startIndex + 1;

  while (i < lastIndex) {
    let lastIndexOfChar = findCharFromLastPosition(s, s[i]);
    if (lastIndexOfChar < lastIndex) {
      i++;
      continue;
    }

    // if not extend the length of anotherPos
    lastIndex = lastIndexOfChar;
    i++;
  }
  return s.substring(startIndex, lastIndex + 1);
}

function partitionLabels(s: string): number[] {
  let result: number[] = [];
  let i = 0;
  while (i < s.length) {
    let strResult = findPartiion(s, i);
    result.push(strResult.length);
    i += strResult.length;
  }
  return result;
}
