/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
    /**
     * @param {Array} arr
     * @param {Array} subArr
     * @return {boolean}
     */
    const includesSubArray = (arr, subArr) => {
        for (let i = 0; i < arr.length - subArr.length + 1; i++) {
            let allFound = true;
            let k = i;
            for (let j = 0; j < subArr.length; j++) {
                if (arr[k] !== subArr[j]) {
                    allFound = false;
                    break;
                }
                k += 1;
            }
            if (allFound) return true;
        }
        return false;
    };

    // let count = 0;

    for (const subArr of pieces) {
        if (!includesSubArray(arr, subArr)) return false;
    }

    // if (count === arr.length) return true;
    // else return false;
    return true;
};
