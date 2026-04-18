/**
 *  566. Reshape the Matrix
 */
/*

Descriptions:
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

Example 1:

Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Example 2:

Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]

 

Constraints:

    m == mat.length
    n == mat[i].length
    1 <= m, n <= 100
    -1000 <= mat[i][j] <= 1000
    1 <= r, c <= 300

*/

// Solution
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
	const m = mat.length,
		n = mat[0].length;

	if (m * n !== r * c) return mat;

	const flat = mat.flat();
	const res = [];

	for (let i = 0; i < r; i++) {
		res.push(flat.slice(i * c, (i + 1) * c));
	}

	return res;
};

/**
 *  Lesson Learned
 */

// Test Cases
const test = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) {
			return true;
		} else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
test(
	matrixReshape(
		[
			[1, 2],
			[3, 4],
		],
		1,
		4,
	),
	[[1, 2, 3, 4]],
);
test(
	matrixReshape(
		[
			[1, 2],
			[3, 4],
		],
		2,
		4,
	),
	[
		[1, 2],
		[3, 4],
	],
);
