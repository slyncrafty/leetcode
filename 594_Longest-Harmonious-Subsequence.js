/**
 *  594. Longest Harmonious Subsequence
 */
/*

Descriptions:
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious among all its possible subsequences.

 

Example 1:

Input: nums = [1,3,2,2,5,2,3,7]

Output: 5

Explanation:

The longest harmonious subsequence is [3,2,2,2,3].

Example 2:

Input: nums = [1,2,3,4]

Output: 2

Explanation:

The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

Example 3:

Input: nums = [1,1,1,1]

Output: 0

Explanation:

No harmonic subsequence exists.

 

Constraints:

    1 <= nums.length <= 2 * 104
    -109 <= nums[i] <= 109

*/

// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function (nums) {
	const freq = new Map();

	for (const num of nums) {
		freq.set(num, (freq.get(num) || 0) + 1);
	}

	let maxLength = 0;
	for (const [num, count] of freq) {
		if (freq.has(num + 1)) {
			maxLength = Math.max(maxLength, freq.get(num + 1) + count);
		}
	}
	return maxLength;
};

/**
 *  Lesson Learned
 */

// Test Cases
const test = (actual, expected) => {
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
test(findLHS([1, 3, 2, 2, 5, 2, 3, 7]), 5);
test(findLHS([1, 2, 3, 4]), 2);
test(findLHS([1, 1, 1, 1]), 0);
