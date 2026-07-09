/**
 *  53. Maximum Subarray
 */
/*

Descriptions:
Given an integer array nums, find the with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

 

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104

 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 
*/

// Solution O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
// 	let currentSum = nums[0];
// 	let largestSum = nums[0];

// 	for (let i = 1; i < nums.length; i++) {
// 		currentSum = Math.max(nums[i], currentSum + nums[i]);
// 		largestSum = Math.max(largestSum, currentSum);
// 	}
// 	return largestSum;
// };

/**
 *  Lesson Learned
 *  Divide and Conquer approach
 *  Left | Cross | Right
 *  T(n) = 2T(n/2) + O(n)
 *  O(n log n)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	function solve(left, right) {
		if (left === right) return nums[left];

		const mid = Math.floor((left + right) / 2);
		const leftMax = solve(left, mid);
		const rightMax = solve(mid + 1, right);

		let sum = 0;
		let leftSum = -Infinity;
		for (let i = mid; i >= left; i--) {
			sum += nums[i];
			leftSum = Math.max(leftSum, sum);
		}
		sum = 0;
		let rightSum = -Infinity;
		for (let i = mid + 1; i <= right; i++) {
			sum += nums[i];
			rightSum = Math.max(rightSum, sum);
		}

		const cross = leftSum + rightSum;
		return Math.max(leftMax, rightMax, cross);
	}

	return solve(0, nums.length - 1);
};

// Test Cases
