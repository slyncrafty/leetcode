/**
 *  448. Find All Numbers Disappeared in an Array
 */
/*

Descriptions:
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:

Input: nums = [1,1]
Output: [2]

 

Constraints:

    n == nums.length
    1 <= n <= 105
    1 <= nums[i] <= n

 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

// Solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		const index = Math.abs(nums[i]) - 1;
		if (nums[index] > 0) {
			nums[index] = -nums[index];
		}
	}
	const res = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			res.push(i + 1);
		}
	}
	return res;
};

/**
 *  Lesson Learned
 */

// Test Cases
const test = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};
	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

test(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
test(findDisappearedNumbers([1, 1]), [2]);
