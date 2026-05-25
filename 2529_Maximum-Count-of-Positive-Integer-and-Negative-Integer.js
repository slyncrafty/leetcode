/**
 *  2529. Maximum Count of Positive Integer and Negative Integer
 */
/*

Descriptions:
Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

    In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.

Note that 0 is neither positive nor negative.

 

Example 1:

Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

Example 2:

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

Example 3:

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

 

Constraints:

    1 <= nums.length <= 2000
    -2000 <= nums[i] <= 2000
    nums is sorted in a non-decreasing order.

 

Follow up: Can you solve the problem in O(log(n)) time complexity?
*/

// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maximumCount = function (nums) {
// 	let pos = 0;
// 	let neg = 0;
// 	for (const num of nums) {
// 		if (num > 0) pos++;
// 		else if (num < 0) neg++;
// 	}
// 	return Math.max(pos, neg);
// };

/**
 *  Insight
 *  Binary Search - input ordered array
 *  find first non-negative num index(i) and first positive num index(j).
 *  return Math.max(i, arr.length - j )
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
	const pos = nums.length - findFirstPosIndex(nums);
	const neg = findFirstNonNegIndex(nums);
	return Math.max(pos, neg);
};

const findFirstNonNegIndex = (nums) => {
	let start = 0;
	let end = nums.length - 1;
	let index = nums.length;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] < 0) start = mid + 1;
		else if (nums[mid] >= 0) {
			end = mid - 1;
			index = mid;
		}
	}
	return index;
};

const findFirstPosIndex = (nums) => {
	let start = 0;
	let end = nums.length - 1;
	let index = nums.length;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] <= 0) start = mid + 1;
		else if (nums[mid] > 0) {
			end = mid - 1;
			index = mid;
		}
	}
	return index;
};

// Test Cases
