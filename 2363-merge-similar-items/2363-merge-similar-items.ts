function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  items1.sort((a, b) => a[0] - b[0]);
  items2.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];
  let i = 0;
  let j = 0;

  while (i < items1.length || j < items2.length) {
    if (i < items1.length && j < items2.length) {
      const item1 = items1[i];
      const item2 = items2[j];

      if (item1[0] === item2[0]) {
        result.push([item1[0], item1[1] + item2[1]]);
        i++;
        j++;
        continue;
      }
      if (item1[0] < item2[0]) {
        result.push(item1);
        i++;
        continue;
      }
      if (item1[0] > item2[0]) {
        result.push(item2);
        j++;
        continue;
      }
    }
    if (i < items1.length) {
      result.push(items1[i]);
      i++;
    }
    if (j < items2.length) {
      result.push(items2[j]);
      j++;
    }
  }

  return result;
}
