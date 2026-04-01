/**
 *  219. Contains Duplicate II
 */
/*

Descriptions:
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
    0 <= k <= 105

*/

// Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	const set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) return true;

		set.add(nums[i]);

		if (set.size > k) {
			set.delete(nums[i - k]);
		}
	}
	return false;
};

/**
 *  Lesson Learned
 *
 */

// Test Cases
const test = (input, k, expected) => {
	const actual = containsNearbyDuplicate(input, k);
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
test([1, 2, 3, 1], 3, true);
test([1, 0, 1, 1], 1, true);
test([1, 2, 3, 1, 2, 3], 2, false);
