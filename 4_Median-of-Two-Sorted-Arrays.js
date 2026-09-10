/**
 *  4. Median of Two Sorted Arrays
 */
/*

Descriptions:
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

 

Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106

*/

// Solution
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
	const shorterArray = nums1.length > nums2.length ? nums2 : nums1;
	const longerArray = nums1.length > nums2.length ? nums1 : nums2;
	const m = shorterArray.length;
	const n = longerArray.length;

	let left = 0;
	let right = m;
	const mid = Math.floor((m + n + 1) / 2);

	while (left <= right) {
		const i = Math.floor((left + right) / 2);
		const j = mid - i;

		const left1 = i === 0 ? -Infinity : shorterArray[i - 1];
		const right1 = i === m ? Infinity : shorterArray[i];

		const left2 = j === 0 ? -Infinity : longerArray[j - 1];
		const right2 = j === n ? Infinity : longerArray[j];

		if (left1 <= right2 && left2 <= right1) {
			if ((m + n) % 2 === 1) {
				return Math.max(left1, left2);
			}

			const maxLeft = Math.max(left1, left2);
			const minRight = Math.min(right1, right2);

			return (maxLeft + minRight) / 2;
		}

		if (left1 > right2) {
			right = i - 1;
		} else {
			left = i + 1;
		}
	}
};

/**
 *  Insight
 *
 *  Find the median/middle value without merging & sorting the two arrays
 *  Binary Search to find the division per array so that half of the elements are on the left.
 *  BS until max of left and min of right per array that satisfies left1 <= right2 && left2 <= right1
 */

// Test Cases
