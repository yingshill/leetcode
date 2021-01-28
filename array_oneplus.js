var plusOne = function(digits) {
    let carry = 0;
    for (let i = digits.length-1 ; i >= 0; i--) {
        carry = (digits[i] + 1 == 0)? 1 : 0;
        if (carry == 0) {
            digits[i] = digits[i] + 1;
            break;
        } else {
            digits[i] = 0;
        }
    }
    if (carry == 1) {
        digits.unshift(1);
    }
    console.log(digits)
    return digits;
};

plusOne([1, 2, 3])


/* Solution Brief
Two cases that to consider:digit + 1 == 10? 
Yes, keep moving forward and keep tracking the previous digits, but once the 
sum is not 10, break and return; and further if the 0-index digit's sum is 10, 
then 1 should be added at the very begining, that's why we need to keep track of global value, carry

No, change the digit and return, done 
*/