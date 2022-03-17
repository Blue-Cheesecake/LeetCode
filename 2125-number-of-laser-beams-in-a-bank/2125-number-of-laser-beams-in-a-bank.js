/**
 * @param {String} string
 * @param {String} char
 */
function count(string, char) {
  let count = 0;
  for (let c of string) if (c === char) count++;
  return count;
}

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let result = 0;
  let count_empty = 0;
  // find laser on each layer
  // times them
  const laser = [];
  for (const layer of bank) {
    let numbers_of_ones = count(layer, "1");
    if (numbers_of_ones === 0) count_empty++;
    else laser.push(numbers_of_ones);
  }
  // console.log(laser, count_empty);

  // have one or less on each layer
  if (count_empty >= bank.length - 1) return 0;

  for (let i = 0; i < laser.length - 1; i++) {
    let c = laser[i] * laser[i + 1];
    result += c;
  }

  return result;
};
