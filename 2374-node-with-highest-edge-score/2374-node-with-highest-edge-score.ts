function edgeScore(edges: number[]): number {
  const scores = new Map<number, number>();

  let node: number | undefined;
  let nVal: number | undefined;

  edges.forEach((destNode, currVal) => {
    const prevVal = scores.get(destNode);
    if (prevVal === undefined) {
      scores.set(destNode, currVal);
    } else {
      scores.set(destNode, prevVal + currVal);
    }

    const score = scores.get(destNode);

    if (node === undefined && nVal === undefined) {
      node = destNode;
      nVal = score;
      return;
    }

    if (nVal! < score! || (nVal === score && destNode < node!)) {
      node = destNode;
      nVal = score;
    }
  });

  // console.log(scores);

  return node!;
}
