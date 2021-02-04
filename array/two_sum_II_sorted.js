var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.legnth; i++) {
        let left = i;
        let right = numbers.length - 1 - i;
        if (left === right) return 
        let sum = numbers[left] + number[right]
        if ( sum === target) {
            return [left + 1, right + 1];
        } else if ( sum > target ) {
            right--;
        } else {
            left++;
        }
    }
};

twoSum([1, 2, 3, 4], 4)