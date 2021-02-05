var findMaxConsecutiveOnes = function(nums) {
    let largest = 0;
    let start = false;
    let startPoint = 0;
    let endPoint = 0;
    let nest = []
    for (let i = 0; i < nums.length; i++) {
        if ( !start && nums[i] === 1 ) {
            if ( i === nums.length - 1) {
                largest = Math.max(1, largest)
            }
            start = true
            startPoint = i;
            endPoint = i;
        } else if (start && nums[i] === 1) {
            if (i === nums.length - 1) {
                nest = nums.slice(startPoint)
                largest = Math.max(nest.length, largest)
            }
            endPoint += 1;
        } else if (start && nums[i] === 0) {
            start = false;
            endPoint = i
            nest = nums.slice(startPoint, endPoint)
            largest = Math.max(nest.length, largest)
            endPoint = 0
        } else {
            continue; 
        }
    }
    return largest;
};
findMaxConsecutiveOnes([1,0,1,1,0,1])

/* though I worked it out but it had high memories and high space, less efficient */