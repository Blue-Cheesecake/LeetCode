/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    /**
     * @param {string} original
     * @param {int} index
     * @param {string} replacement
     * @return {string}
     */
    const replaceStringAt = (original, index, replacement) =>
        original.slice(0, index) + replacement + original.slice(index + 1);

    let result = "!".repeat(s.length);

    for (let i = 0; i < s.length; i++)
        result = replaceStringAt(result, indices[i], s[i]);

    return result;
};
