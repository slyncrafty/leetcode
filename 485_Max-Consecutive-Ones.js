/**
 *  485. Max Consecutive Ones
 */
/*

Descriptions:
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

 

Constraints:

    1 <= nums.length <= 105
    nums[i] is either 0 or 1.

*/

// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	let maxCount = 0;
	let curr = 0;

	for (let n of nums) {
		if (n === 1) {
			curr++;
			maxCount = Math.max(maxCount, curr);
		} else {
			curr = 0;
		}
	}
	return maxCount;
};

/**
 *  Lesson Learned
 */

// Test Cases
const test = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

test(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);
test(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]), 2);
