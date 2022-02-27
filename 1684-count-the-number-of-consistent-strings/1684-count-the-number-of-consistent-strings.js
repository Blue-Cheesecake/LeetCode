/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let result = 0;

    for (const word of words) {
        let allAllowed = true;
        for (const cha of word) {
            if (!allowed.includes(cha)) {
                allAllowed = false;
                break;
            }
        }
        if (allAllowed) result += 1;
    }

    return result;
};
