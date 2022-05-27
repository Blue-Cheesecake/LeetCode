function numberOfSteps(num: number, counter: number = 0): number {
  if (num === 0) return counter;
  if (num % 2 == 0) num /= 2;
  else num -= 1;

  return numberOfSteps(num, counter + 1);
}
