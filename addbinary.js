var addBinary = function(a, b) {
    let res = "";
    let carry = 0;
    const max = Math.max(a.length, b.length);
    let val = 0;
    const len_a = a.length
    const len_b = b.length

    for (let i = 0; i < max; i++) {
        val = Number(a(len_a-1-i || 0)) + Number(b(len_b-1-i || 0)) + carry;
        carry = Math.floor(val/2);
        res = (val%2) + res
    }
    return res;
}

/* 
Math.floor(0/2) -> 0
Math.floor(1/2) -> 0
Math.floor(2/2) -> 1
Math.floor(3/2) -> 1

so only the last two occasions would carry 1, that's what we what

val%2
0%2 -> 0
1%2 -> 1
2%2 -> 0
3%2 -> 1

% can create this pattern 
*/