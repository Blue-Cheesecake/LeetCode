/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let result = [];
    let baseStr = words[0];

    for (const baseChar of baseStr) {
        let allFound = true;

        for (let i = 0; i < words.length; i++) {
            const string = words[i];

            if (string.includes(baseChar)) {
                words[i] = string.replace(baseChar, "");
            } else {
                allFound = false;
                break;
            }
        }
        if (allFound) result.push(baseChar);
    }

    return result;
};
