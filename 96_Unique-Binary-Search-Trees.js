/**
 *  96. Unique Binary Search Trees
 */
/*

Descriptions:
Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

 

Example 1:

Input: n = 3
Output: 5

Example 2:

Input: n = 1
Output: 1

 

Constraints:

    1 <= n <= 19
*/

// Solution
/**
 * @param {number} n
 * @return {number}
 */
const numTrees = (n) => {
	const dp = new Array(n + 1).fill(0);
	dp[0] = 1;

	for (let nodes = 1; nodes <= n; nodes++) {
		for (let root = 1; root <= nodes; root++) {
			const left = root - 1;
			const right = nodes - root;

			dp[nodes] += dp[left] * dp[right];
		}
	}
};
/**
 *  Insight
 */

// Test Cases
