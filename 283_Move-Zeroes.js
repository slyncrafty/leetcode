/**
 *  283. Move Zeroes
 */
/*

Descriptions:
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

 

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 
Follow up: Could you minimize the total number of operations done?
 
*/

// Solution
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let pos = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[pos] = nums[i];
			pos++;
		}
	}
	for (let i = pos; i < nums.length; i++) {
		nums[i] = 0;
	}
};

/**
 *  Lesson Learned
 */

// Test Cases
const test = (input, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};
	moveZeroes(input);
	if (equal(input, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

test([0, 1, 0, 3, 12], [1, 3, 12, 0, 0]);
test([0], [0]);
