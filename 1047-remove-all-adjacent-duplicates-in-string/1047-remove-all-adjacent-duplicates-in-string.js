/**
 * @param {string} s
 * @return {int} i -> any index, -1 if not found
 */
const findDuplicateAdjacentCharacters = (s) => {
  if (s.length <= 1) {
    return -1;
  }

  for (let i = 0; i < s.length - 1; i++) {
    const a = s[i];
    const b = s[i + 1];

    if (a == b) {
      return i;
    }
  }
  return -1;
};

// Unit Tests
// console.log("Unit Tests of findDuplicateAdjacentCharacters function");
// console.log(findDuplicateAdjacentCharacters("abbaca")); // 1
// console.log(findDuplicateAdjacentCharacters("aaca")); // 0
// console.log(findDuplicateAdjacentCharacters("ca")); // -1
// console.log(findDuplicateAdjacentCharacters("azxxzy")); // 2
// console.log(findDuplicateAdjacentCharacters("azzy")); // 1
// console.log(findDuplicateAdjacentCharacters("ay")); // -1

/**
 * @param {int} i the index of duplicate adjacent characters
 * @param {string} s the string
 * @return {string}
 */
const removeDuplicateAdjacentCharacters = (i, s) => {
  return s.substring(0, i) + s.substring(i + 2, s.length);
};

// console.log("Unit Tests of removeDuplicateAdjacentCharacters function");
// console.log(removeDuplicateAdjacentCharacters(1, "abbaca")); // aaca
// console.log(removeDuplicateAdjacentCharacters(0, "aaca")); // ca

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  // while (found duplicate adjacent characters)
  //    remove that duplicate adjacent characters

  let index;
  do {
    index = findDuplicateAdjacentCharacters(s);
    if (index != -1) {
      // remove
      s = removeDuplicateAdjacentCharacters(index, s);
    }
  } while (index != -1);

  return s;
};
