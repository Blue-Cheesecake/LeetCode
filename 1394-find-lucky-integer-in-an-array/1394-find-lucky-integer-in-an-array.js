/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let result = new Set();
    let freq = new Map();

    for (const num of arr) {
        freq.set(num, freq.has(num) ? freq.get(num) + 1 : 1);
        if (freq.get(num) === num) result.add(num);
        else if (freq.get(num) > num && result.has(num)) result.delete(num);
    }

    let max = -1;
    for (const num of result) {
        max = Math.max(max, num);
    }
    return max;
};
