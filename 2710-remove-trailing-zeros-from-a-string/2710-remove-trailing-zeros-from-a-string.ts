function removeTrailingZeros(num: string): string {
  let index = num.length - 1;

  while (num[index] === "0") {
    index--;
  }

  return num.substring(0, index + 1);
}
