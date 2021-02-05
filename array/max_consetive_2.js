var findMaxConsecutiveOnes = function(nums) {
    let largest = 0;
    let current = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            current = 0
        } else {
            largest += 1;
        }
        if (current > largest) largest = current; 
    }
    return largest;
}