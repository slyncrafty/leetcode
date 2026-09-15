/**
 *  46. Permutations
 */
/*

Descriptions:
Given an array nums of distinct integers, return all the possible . You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]

 

Constraints:

    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    All the integers of nums are unique.

*/

// Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
	const result = [];
	const current = [];
	const used = new Array(nums.length).fill(false);

	function backtrack() {
		if (current.length === nums.length) {
			result.push([...current]);
			return;
		}

		for (let i = 0; i < nums.length; i++) {
			if (used[i]) continue;

			current.push(nums[i]);
			used[i] = true;

			backtrack();

			current.pop();
			used[i] = false;
		}
	}
	backtrack();

	return result;
};

/**
 *  Insight
 */

// Test Cases
