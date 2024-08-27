function helper(n: number, curr: string, result: string[]): string[] {
  const allowedChars = new Set<string>(["0", "1"]);

  if (curr.length === n) {
    result.push(curr);
    return result;
  }

  allowedChars.forEach((c) => {
    let copied = curr.toString();
    if (copied.length > 0 && copied.charAt(copied.length - 1) === "0" && c === "0") {
      return;
    }
    copied += c;
    helper(n, copied, result);
  });

  return result;
}

function validStrings(n: number): string[] {
  return helper(n, "", []);
}
