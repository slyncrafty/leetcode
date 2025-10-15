/**
 *  15. 3Sum
 */
/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

 

Constraints:

    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105

*/

// Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
	// sort the array ascending order
	nums.sort((a, b) => a - b);
	const n = nums.length;
	const res = [];

	// for each index i using l and r to find pairs that sum to -nums[i]
	for (let i = 0; i < n - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		if (nums[i] > 0) break;

		let j = i + 1,
			k = n - 1;
		const target = -nums[i];

		while (j < k) {
			const sum = nums[j] + nums[k];
			if (sum === target) {
				res.push([nums[i], nums[j], nums[k]]);
				const jval = nums[j],
					kval = nums[k];
				while (j < k && nums[j] === jval) j++;
				while (j < k && nums[k] === kval) k--;
			} else if (sum < target) {
				j++;
			} else {
				k--;
			}
		}
	}
	return res;
};

/**
 *  Lesson Learned
 */

// Test Cases
const nums = [
	[-1, 0, 1, 2, -1, -4],
	[0, 1, 1],
	[0, 0, 0],
];
const expected = [
	[
		[-1, -1, 2],
		[-1, 0, 1],
	],
	[],
	[[0, 0, 0]],
];

const deepEqual = (a, b) => {
	if (a === b) return true;
	if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		return a.every((e, i) => deepEqual(e, b[i]));
	}
	return false;
};

const strictEqualArr = (a, b) => {
	let ok = deepEqual(a, b);
	if (ok) console.log('Correct!', a, b);
	else console.log('Incorrect', a, b);
	return ok;
};

for (let i = 0; i < nums.length; i++) {
	strictEqualArr(threeSum(nums[i]), expected[i]);
}
