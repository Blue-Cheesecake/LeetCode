/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let result = 0;
    let str = "";

    for (let i = 0; i < s.length; i++) {
        const cha = s[i];

        if (str === "" || str.charAt(str.length - 1) === cha) {
            str += cha;
            result = Math.max(result, str.length);
            continue;
        }

        str = cha;
    }

    return result;
};
