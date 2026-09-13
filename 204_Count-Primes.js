/**
 *  204. Count Primes
 */
/*

Descriptions:
Given an integer n, return the number of prime numbers that are strictly less than n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:

Input: n = 0
Output: 0

Example 3:

Input: n = 1
Output: 0

 

Constraints:

    0 <= n <= 5 * 106

*/

// Solution
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
	if (n <= 2) return 0;
	const isPrime = new Array(n).fill(true);

	isPrime[0] = false;
	isPrime[1] = false;

	for (let i = 2; i < n; i++) {
		if (isPrime[i]) {
			for (let j = i * i; j < n; j += i) {
				isPrime[j] = false;
			}
		}
	}

	let count = 0;

	for (let i = 2; i < n; i++) {
		if (isPrime[i]) {
			count++;
		}
	}
	return count;
};

/**
 *  Insight
 *
 *  Sieve of Eratosthenes
 *  &
 *  Composite numbers. if i = 7, all the multiples of 7 are already taken cared already up until 7 * 7 = 49
 *  1 * 7 = 7
 *  2 * 7 = 14
 *  3 * 7 = 21
 *  4 * 7 = 28 ...
 */

// Test Cases
