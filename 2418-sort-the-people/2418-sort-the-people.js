/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const mapping = [];

  names.forEach((val, index) => {
    mapping.push([val, heights[index]]);
  });

  return mapping.sort((a, b) => b[1] - a[1]).map((val) => val[0]);
};
