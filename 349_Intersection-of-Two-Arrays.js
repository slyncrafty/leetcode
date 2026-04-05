/**
 *  349. Intersection of Two Arrays
 */
/*

Descriptions:
Given two integer arrays nums1 and nums2, return an array of their . Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

 

Constraints:

    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000

*/

// Solution
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);
	const res = [];
	for (let e of set1) {
		if (set2.has(e)) {
			res.push(e);
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
			const sortedA = [...a].sort();
			const sortedB = [...b].sort();
			return sortedA.every((e, i) => equal(e, sortedB[i]));
		}
		return false;
	};
	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
test(intersection([1, 2, 2, 1], [2, 2]), [2]);
test(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
