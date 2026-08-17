/**
 *  477. Total Hamming Distance
 */
/*

Descriptions:
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.

 

Example 1:

Input: nums = [4,14,2]
Output: 6
Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case).
The answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

Example 2:

Input: nums = [4,14,4]
Output: 4

 

Constraints:

    1 <= nums.length <= 104
    0 <= nums[i] <= 109
    The answer for the given input will fit in a 32-bit integer.

*/

// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
const totalHammingDistance = function (nums) {
	const n = nums.length;
	let sum = 0;
	for (let bit = 0; bit < 30; bit++) {
		let ones = 0;

		for (const num of nums) {
			if ((num >> bit) & 1) {
				ones++;
			}
		}
		const zeros = n - ones;
		sum += ones * zeros;
	}
	return sum;
};

/**
 *  Insight
 *
 *  instead of summing every hamming distance,
 *  count number of 1's and 0's per bit position of the numbers in the array
 *  then calculate contribution (ones * zeros = hamming distance)
 *
 */

// Test Cases
