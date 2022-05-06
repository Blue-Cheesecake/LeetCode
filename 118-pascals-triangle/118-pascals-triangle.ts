const gen_row = (
  base_arr: number[],
  index: number = 0,
  result: number[] = []
): number[] => {
  if (index === 0) {
    result.push(1);
    return gen_row(base_arr, index + 1, result);
  }
  if (index === base_arr.length) {
    result.push(1);
    return result;
  }
  // const new_num: number = result[index] + result[index - 1];
  // console.log(index);
  result.push(base_arr[index] + base_arr[index - 1]);
  return gen_row(base_arr, index + 1, result);
};

function generate(numRows: number): number[][] {
  const result: number[][] = [[1]];
  for (let i = 1; i < numRows; i++) {
    result.push(gen_row(result[i - 1]));
  }
  return result;
}
