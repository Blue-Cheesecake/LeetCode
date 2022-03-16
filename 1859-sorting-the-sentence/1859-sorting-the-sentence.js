/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const spl = s.split(" ");
  let arr = spl.sort(
    (a, b) => Number(a[a.length - 1]) - Number(b[b.length - 1])
  );
  // console.log(arr);
  arr = arr.map((str) => str.substring(0, str.length - 1));
  return arr.join(" ");
};
