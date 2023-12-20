function balancedStringSplit(s: string): number {
  let result = 0;
  let numR = 0;
  let numL = 0;

  for (const c of s) {
    if (c === "R") {
      numR++;
    }
    if (c === "L") {
      numL++;
    }

    if (numR === numL) {
      result++;
      numR = 0;
      numL = 0;
    }
  }

  return result;
}
