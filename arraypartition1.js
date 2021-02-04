/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    console.log(nums)
    let res = 0
    for (let i = 0; i < nums.length; i = i + 2) {
        res += nums[i]
    }
    return res;
};

arrayPairSum([6214, -2290, 2833, -7908])
/* sort them and pair them in order from the beginning */