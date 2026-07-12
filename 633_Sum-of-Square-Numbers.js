/**
 *  633. Sum of Square Numbers
 */
/*

Descriptions:
Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

 

Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5

Example 2:

Input: c = 3
Output: false

 

Constraints:

    0 <= c <= 231 - 1

*/

// Solution
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
	let left = 0;
	let right = Math.floor(Math.sqrt(c));

	while (left <= right) {
		const sum = left * left + right * right;
		if (sum === c) return true;
		if (sum < c) left++;
		else right--;
	}
	return false;
};

/**
 *  Lesson Learned
 */

// Test Cases
