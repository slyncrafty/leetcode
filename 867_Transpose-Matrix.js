/**
 *  867. Transpose Matrix
 */
/*

Descriptions:
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]

 

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 1000
    1 <= m * n <= 105
    -109 <= matrix[i][j] <= 109

*/

// Solution
const transpose = (matrix) => {
	const r = matrix.length;
	const c = matrix[0].length;
	const newMatrix = Array.from({ length: c }, () => Array(r));

	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			newMatrix[j][i] = matrix[i][j];
		}
	}
	return newMatrix;
};

/**
 *  Insight
 */

// Test Cases
