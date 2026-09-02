/**
 *  885. Spiral Matrix III
 */
/*

Descriptions:
You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

Return an array of coordinates representing the positions of the grid in the order you visited them.

 

Example 1:

Input: rows = 1, cols = 4, rStart = 0, cStart = 0
Output: [[0,0],[0,1],[0,2],[0,3]]

Example 2:

Input: rows = 5, cols = 6, rStart = 1, cStart = 4
Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]

 

Constraints:

    1 <= rows, cols <= 100
    0 <= rStart < rows
    0 <= cStart < cols

*/

// Solution
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
const spiralMatrixIII = function (rows, cols, rStart, cStart) {
	const matrix = [];
	const n = rows * cols;
	let r = rStart;
	let c = cStart;

	const directions = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0], // right, bottom, left, top
	];

	let step = 1;
	let direction = 0;

	while (matrix.length < n) {
		for (let i = 0; i < step; i++) {
			if (r >= 0 && r < rows && c >= 0 && c < cols) {
				matrix.push([r, c]);
			}

			r += directions[direction][0];
			c += directions[direction][1];
		}

		direction = (direction + 1) % 4;
		if (direction === 0 || direction === 2) {
			step++;
		}
	}
	return matrix;
};

/**
 *  Insight
 */

// Test Cases
