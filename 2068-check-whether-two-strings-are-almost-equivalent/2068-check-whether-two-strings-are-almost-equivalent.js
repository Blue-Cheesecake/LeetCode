/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
    let freq = new Map(); // <string, Array<number>> - <character, [freq1, freq2]>
    for (let i = 0; i < word1.length; i++) {
        const c1 = word1[i];
        const c2 = word2[i];

        freq.set(
            c1,
            !freq.has(c1) ? [1, 0] : [freq.get(c1)[0] + 1, freq.get(c1)[1]]
        );

        freq.set(
            c2,
            !freq.has(c2) ? [0, 1] : [freq.get(c2)[0], freq.get(c2)[1] + 1]
        );
    }

    // console.log(freq);
    for (const arr of freq.values()) {
        if (Math.abs(arr[0] - arr[1]) > 3) return false;
    }

    return true;
};
