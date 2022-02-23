/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let result = 0;

    // count freq
    // check if freq is = 1 and other is 1
    let freq1 = new Map();
    let freq2 = new Map();

    let i = 0;
    let j = 0;
    while (i < words1.length || j < words2.length) {
        if (i < words1.length) {
            const str = words1[i];
            freq1.set(str, freq1.has(str) ? freq1.get(str) + 1 : 1);
        }
        if (j < words2.length) {
            const str = words2[j];
            freq2.set(str, freq2.has(str) ? freq2.get(str) + 1 : 1);
        }

        i += 1;
        j += 1;
    }

    for (const key of freq1.keys()) {
        if (!freq2.has(key) || freq1.get(key) > 1 || freq2.get(key) > 1) {
            continue;
        }
        result += 1;
    }

    return result;
};
