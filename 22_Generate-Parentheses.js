/**
 *  22. Generate Parentheses
 */
/*

Descriptions:
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

 

Constraints:

    1 <= n <= 8

*/

// Solution
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
	const result = [];

	// current: current string
	// open: number of open parenthesis
	// close: number of close parenthesis
	function backtrack(current, open, close) {
		// base case
		if (current.length === 2 * n) {
			result.push(current);
			return;
		}
		if (open < n) {
			backtrack(current + '(', open + 1, close);
		}
		if (close < open) {
			backtrack(current + ')', open, close + 1);
		}
	}
	backtrack('', 0, 0);
	return result;
};

/**
 *  Insight
 */

// Test Cases
