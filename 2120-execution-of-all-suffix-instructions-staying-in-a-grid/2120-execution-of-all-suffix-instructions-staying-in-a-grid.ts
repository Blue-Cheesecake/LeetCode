function isValid(curr_x: number, curr_y: number, n: number): boolean {
  if (curr_x === -1 || curr_y === -1) return false;
  if (curr_x === n || curr_y === n) return false;
  return true;
}

function executeInstructions(
  n: number,
  startPos: number[],
  s: string
): number[] {
  const result: Array<number> = [];

  for (let i = 0; i < s.length; i++) {
    let curr_x: number = startPos[0];
    let curr_y: number = startPos[1];
    let num_executed_instructions: number = 0;

    for (let j = i; j < s.length; j++) {
      if (s[j] === "L") curr_y--;
      if (s[j] === "R") curr_y++;
      if (s[j] === "U") curr_x--;
      if (s[j] === "D") curr_x++;

      if (!isValid(curr_x, curr_y, n)) break;
      num_executed_instructions++;
    }

    result.push(num_executed_instructions);
  }

  return result;
}
