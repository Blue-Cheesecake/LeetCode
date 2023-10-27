function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  let result: number = 0;

  items.forEach((arr) => {
    if (ruleKey === "type" && ruleValue === arr[0]) {
      result++;
    }
    if (ruleKey === "color" && ruleValue === arr[1]) {
      result++;
    }
    if (ruleKey === "name" && ruleValue === arr[2]) {
      result++;
    }
  });

  return result;
}
