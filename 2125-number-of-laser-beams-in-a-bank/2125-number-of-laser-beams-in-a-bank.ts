function countOnes(str: string): number {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === "1") {
      result++;
    }
  }

  return result;
}

function numberOfBeams(bank: string[]): number {
  const lasers: number[] = [];
  bank.forEach((laser) => {
    const count = countOnes(laser);
    if (count === 0) {
      return;
    }
    lasers.push(count);
  });

  if (lasers.length <= 1) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < lasers.length - 1; i++) {
    const f = lasers[i];
    const b = lasers[i + 1];
    result += f * b;
  }

  return result;
}
