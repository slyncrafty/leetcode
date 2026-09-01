/**
 *  59. Spiral Matrix II
 */
/*

Descriptions:
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

Example 1:

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:

Input: n = 1
Output: [[1]]

 

Constraints:

    1 <= n <= 20

*/

// Solution
/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
	const matrix = Array.from({ length: n }, () => Array(n).fill(0));
	let value = 1;

	let top = 0;
	let bottom = n - 1;
	let left = 0;
	let right = n - 1;

	while (top <= bottom && left <= right) {
		for (let c = left; c <= right; c++) {
			matrix[top][c] = value++;
		}
		top++;

		for (let r = top; r <= bottom; r++) {
			matrix[r][right] = value++;
		}
		right--;

		if (top <= bottom) {
			for (let c = right; c >= left; c--) {
				matrix[bottom][c] = value++;
			}
			bottom--;
		}

		if (left <= right) {
			for (let r = bottom; r >= top; r--) {
				matrix[r][left] = value++;
			}
			left++;
		}
	}
	return matrix;
};

/**
 *  Insight
 */

// Test Cases
