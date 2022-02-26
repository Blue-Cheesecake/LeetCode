/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let even = [];
    let odd = [];
    nums.forEach((num) => {
        if (num % 2 === 0) even.push(num);
        else odd.push(num);
    });
    Array.prototype.push.apply(even, odd);
    return even;
};
