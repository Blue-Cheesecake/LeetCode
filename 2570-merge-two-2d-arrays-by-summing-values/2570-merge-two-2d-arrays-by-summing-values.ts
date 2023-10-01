function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  let result: number[][] = [];
  const addedPair2 = new Set<number>();

  for (const element of nums1) {
    const pair1 = element;
    let j = 0;

    let isFound = false;
    for (let k = 0; k < nums2.length; k++) {
      const pair2 = nums2[k];

      if (pair2[0] > pair1[0]) {
        break;
      }
      if (pair2[0] === pair1[0]) {
        isFound = true;
        j = k;
        break;
      }
    }

    if (isFound) {
      result.push([pair1[0], pair1[1] + nums2[j][1]]);
      addedPair2.add(j);
      continue;
    }
    result.push(pair1);
  }

  nums2.forEach((pair, index) => {
    if (!addedPair2.has(index)) {
      result.push(pair);
    }
  });

  result.sort((pair1, pair2) => pair1[0] - pair2[0]);

  return result;
}
