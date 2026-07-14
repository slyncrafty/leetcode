/**
 *  1588. Sum of All Odd Length Subarrays
 */
/*

Descriptions:
Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

Example 3:

Input: arr = [10,11,12]
Output: 66

 

Constraints:

    1 <= arr.length <= 100
    1 <= arr[i] <= 1000

 

Follow up:

Could you solve this problem in O(n) time complexity?
*/

// Solution
// Get all possible odd-length subarray and get the sum
// O(n^2)
/**
 * @param {number[]} arr
 * @return {number}
 */

// const sumOddLengthSubarrays = function (arr) {
// 	const n = arr.length;
// 	const prefix = Array(n + 1).fill(0);
// 	for (let i = 0; i < n; i++) {
// 		prefix[i + 1] = prefix[i] + arr[i];
// 	}
// 	let sum = 0;

// 	for (let len = 1; len <= n; len += 2) {
// 		for (let start = 0; start + len <= n; start++) {
// 			sum += prefix[start + len] - prefix[start];
// 		}
// 	}
// 	return sum;
// };

// O(n)
// for each element, how many sub-arrays can it be part of
// contribution of each element = value * (# odd-length subarrays)
const sumOddLengthSubarrays = function (arr) {
	let sum = 0;
	const n = arr.length;

	for (let i = 0; i < n; i++) {
		const left = i + 1;
		const right = n - i;

		const total = left * right;
		const odd = Math.floor((total + 1) / 2);

		sum += arr[i] * odd;
	}
	return sum;
};

/**
 *  Lesson Learned
 */

// Test Cases
