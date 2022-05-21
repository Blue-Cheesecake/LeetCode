function findRelativeRanks(score: any[]): string[] {
  // retrieve value as a matrix [[score, index]]
  // sort matrix by score
  // assign back to score array

  const mat = [];
  for (let i = 0; i < score.length; i++) mat.push([score[i], i]);

  mat.sort((a, b) => b[0] - a[0]);

  let currVal = 4;
  for (let i = 0; i < mat.length; i++) {
    if (i === 0) score[mat[0][1]] = "Gold Medal";
    else if (i === 1) score[mat[1][1]] = "Silver Medal";
    else if (i === 2) score[mat[2][1]] = "Bronze Medal";
    else {
      score[mat[i][1]] = String(currVal);
      currVal++;
    }
  }

  // console.log(mat);
  return score;
}
