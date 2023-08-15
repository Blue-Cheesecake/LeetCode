/**
 * @param {string} str
 * @return {Map<string, number>}
 */
function findFrequency(str) {
  const ret = new Map();
  for (const char of str) {
    if (ret.has(char)) {
      ret.set(char, ret.get(char) + 1);
    } else {
      ret.set(char, 1);
    }
  }
  return ret;
}

// console.log(findFrequency("aaabb")); // a: 3 b: 2
// console.log(findFrequency("abcd")); // a: 1 b: 1 c: 1 d: 1

/**
 * @param {Map<string, number>} candidate
 * @param {Map<string, number>} target
 * @return {boolean}
 */
function isValidToFormString(candidate, target) {
  let isValid = true;
  target.forEach((value, key) => {
    if (!candidate.has(key)) {
      isValid = false;
      return;
    }
    if (candidate.get(key) < value) {
      isValid = false;
    }
  });
  return isValid;
}

// console.log(
//   isValidToFormString(
//     findFrequency("ilovecodingonleetcode"),
//     findFrequency("code")
//   )
// ); // true

// console.log(
//   isValidToFormString(findFrequency("ilovecd"), findFrequency("code"))
// ); // true

// console.log(isValidToFormString(findFrequency("ilove"), findFrequency("code"))); // false

/**
 * @param {Map<string, number>} a
 * @param {Map<string, number>} b
 * @return {Map<string, number>}
 */
function subtractFrequence(a, b) {
  let ret = new Map();

  a.forEach((value, key) => {
    if (!b.has(key)) {
      ret.set(key, value);
    } else {
      let newVal = value - b.get(key);
      if (newVal > 0) {
        ret.set(key, newVal);
      }
    }
  });

  return ret;
}

// console.log(subtractFrequence(findFrequency("aaabb"), findFrequency("ab"))); // a: 2 b: 1
// console.log(subtractFrequence(findFrequency("aaabbcc"), findFrequency("ab"))); // a: 2 b: 1 c: 2
// console.log(subtractFrequence(findFrequency("aaabbcc"), findFrequency("abcc"))); // a: 2 b: 1

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  // count freq on s and target
  let freqS = findFrequency(s);
  const freqTarget = findFrequency(target);
  let result = 0;

  let isAbleToFormString;
  do {
    isAbleToFormString = isValidToFormString(freqS, freqTarget);
    if (isAbleToFormString) {
      result += 1;
      freqS = subtractFrequence(freqS, freqTarget);
    }
  } while (isAbleToFormString);

  return result;
};
