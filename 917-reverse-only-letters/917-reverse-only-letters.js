/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let result = "";
    let revString = "";

    /**
     * @param {string} char Character
     * @return {boolean}
     */
    let isLetter = (char) => char.toLowerCase() !== char.toUpperCase();

    for (const char of s) if (isLetter(char)) revString = char + revString;

    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (!isLetter(s[i])) {
            result += s[i];
            continue;
        }
        let len = 0;
        for (let k = i; k < s.length + 1; k++) {
            if (k === s.length || !isLetter(s[k])) {
                i = k - 1;
                result += revString.slice(j, j + len);
                j += len;
                break;
            } else {
                len += 1;
            }
        }
    }

    return result;
};
