var strStr = function(haystack, needle) {
    if (needle === "") return 0
    if (haystack.length < needle.length) return -1; 
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i+needle.length) === needle) {
            return i;
        }
    }
    return -1;
};

/* 
edge cases: 
needle = "" -> 0
haystack.length < needle.length -> -1
haystack.length = needle.length -> i <= haystack.length - needle.length
*/