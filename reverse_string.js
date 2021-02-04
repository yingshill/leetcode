/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (s.length === 0) return "";
    if (s.length === 1) return s;
    let left = 0;
    
    let change = 0;
    for (let i = left; i < s.strength; i++) {
        if (i <= s.length - i) return
        let right = s.length -1 - i;
        change = s[left];
        s[left] = s[right]
        s[right] = change
    }
    return s;
};

/* 
return condition
*/