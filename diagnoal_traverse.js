/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (!matrix.length) return [];
    let map = {};
    const r = matrix.length;
    const c = matrix[0].length;
    for ( let i = 0; i < r ; i ++) {
        for (let j = 0 ; j < c ; j ++) {
            let key = i + j;
            if (!(key in map)) {
                map[key] = [];
                map[key].push(matrix[i][j])
            } else {
                map[key].push(matrix[i][j]);
            }
        }
    }
    
    let res = [];
    let flag = true;

    for (key in map) {
        if (key === "1" || key === "0") {
            res = res.concat(map[key])
            flag = !flag;
        } else if (flag) {
            let reverseArr = map[key].reverse();
            res = res.concat(reverseArr);
            flag = !flag;
        } else {
            res = res.concat(map[key]);
            flag = !flag;
        }
    }
    console.log(res)
    return res;
};


findDiagonalOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
])
/* 
1. Sum on each diaganol is the same, so we map the sum in an object
2. decide which direction to go while loop the map's array and reverse every loop */