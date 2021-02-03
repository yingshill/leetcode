/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let direction = "right";

    while (left <= right && top <= bottom) {
        if (direction === "right") {
            for (let i = left ; i <= right ; i++) {
                res.push(matrix[top][i]);
            }
            top += 1;
            direction = "down";
        } else if (direction === "down") {
            for (let i = top ; i <= bottom ; i++) {
                res.push(matrix[i][right])
            }
            right -= 1;
            direction = "left";
        } else if (direction === "left") {
            for (let i = right ; i >= left ; i--) {
                res.push(matrix[bottom][i])
            }
            bottom -= 1;
            direction = "up";
        } else if (direction === "up") {
            for (let i = bottom ; i >= top ; i--) {
                res.push(matrix[i][left])
            }
            left += 1;
            direction = "right";
        }
    }
    return res;
};