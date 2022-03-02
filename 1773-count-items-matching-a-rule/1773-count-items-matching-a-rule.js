/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let result = 0;

    for (const [type, color, name] of items) {
        if (
            (ruleKey === "type" && ruleValue === type) ||
            (ruleKey === "color" && ruleValue === color) ||
            (ruleKey === "name" && ruleValue === name)
        )
            result += 1;
    }

    return result;
};
