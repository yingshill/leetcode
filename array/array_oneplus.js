var plusOne = function(digits) {
    let hundred = digits.length;
    const plusBefore = digits.reduce((number, item)=>{
        if(hundred === 0) return number;
        number += item*Math.pow(10, hundred-1);
        hundred = hundred - 1;
        return number;
    }, 0)
    const plusAfter = plusBefore + 1;

    console.log(plusAfter);
    const newArr = Array.from(String(plusAfter), Number);
    console.log(newArr);
    return newArr;
};

plusOne([1, 2, 3])