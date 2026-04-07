/**
 *  414. Third Maximum Number
 */
/*

Descriptions:
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

 

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 
Follow up: Can you find an O(n) solution?
*/

// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
	const set = [...new Set(nums)];
	set.sort((a, b) => b - a);

	return set.length >= 3 ? set[2] : set[0];
};

/**
 *  Lesson Learned
 */
var thirdMax = function (nums) {
	let first = -Infinity;
	let second = -Infinity;
	let third = -Infinity;

	for (const n of nums) {
		if (first === n || second === n || third === n) continue;

		if (n > first) {
			[first, second, third] = [n, first, second];
		} else if (n > second) {
			[second, third] = [n, second];
		} else if (n > third) {
			third = n;
		}
	}
	return third === -Infinity ? first : third;
};

// Test Cases
const test = (actual, expected) => {
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

test(thirdMax([3, 2, 1]), 1);
test(thirdMax([1, 2]), 2);
test(thirdMax([2, 2, 3, 1]), 1);
