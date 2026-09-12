/**
 *  264. Ugly Number II
 */
/*

Descriptions:
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.

 

Example 1:

Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

Example 2:

Input: n = 1
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

 

Constraints:

    1 <= n <= 1690

*/

// Solution
/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
	const dp = new Array(n);

	dp[0] = 1;
	let idx2 = 0;
	let idx3 = 0;
	let idx5 = 0;

	for (let i = 1; i < n; i++) {
		const next2 = dp[idx2] * 2;
		const next3 = dp[idx3] * 3;
		const next5 = dp[idx5] * 5;

		dp[i] = Math.min(next2, next3, next5);

		if (dp[i] === next2) {
			idx2++;
		}
		if (dp[i] === next3) {
			idx3++;
		}
		if (dp[i] === next5) {
			idx5++;
		}
	}
	return dp[n - 1];
};

/**
 *  Insight
 */

// Test Cases
