/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let arr = [];
  for (let i = 0; i < m; i++) arr.push(new Array(n).fill(0));
  let result = 0;

  for (const [r, c] of indices) {
    // run col based on r
    for (let i = 0; i < n; i++) {
      arr[r].splice(i, 1, arr[r][i] + 1);
      if (arr[r][i] % 2 === 0) result -= 1;
      else result += 1;
    }

    // run row based on c
    for (let i = 0; i < m; i++) {
      // arr[i][c] += 1;
      arr[i].splice(c, 1, arr[i][c] + 1);
      if (arr[i][c] % 2 === 0) result -= 1;
      else result += 1;
    }
  }

  return result;
};
