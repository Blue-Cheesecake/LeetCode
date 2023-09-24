function findMatrix(nums: number[]): number[][] {
  const result: number[][] = [];

  nums.forEach((val) => {
    let isPushed = false;

    for (const list of result) {
      if (list.includes(val)) {
        continue;
      }
      list.push(val);
      isPushed = true;
      break;
    }

    if (!isPushed) {
      result.push([val]);
    }
  });

  return result;
}
