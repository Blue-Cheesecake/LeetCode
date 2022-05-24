/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  let n = s.length;
  do {
    const firstHalf = s.substring(0, n);
    const indexOfBase = goal.indexOf(firstHalf);
    if (indexOfBase !== -1) {
      const secondHalf = s.substring(n, s.length);
      const indexOfSecondHalf = goal.indexOf(secondHalf);
      if (indexOfSecondHalf !== -1) {
        return (
          firstHalf + secondHalf === goal || secondHalf + firstHalf === goal
        );
      }
    }
    n--;
  } while (n > 0);
  return false;
};
