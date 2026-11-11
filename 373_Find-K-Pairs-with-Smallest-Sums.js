/**
 *  373. Find K Pairs with Smallest Sums
 */
/*

Descriptions:
You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

Define a pair (u, v) which consists of one element from the first array and one element from the second array.

Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

 

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

Example 2:

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

 

Constraints:

    1 <= nums1.length, nums2.length <= 105
    -109 <= nums1[i], nums2[i] <= 109
    nums1 and nums2 both are sorted in non-decreasing order.
    1 <= k <= 104
    k <= nums1.length * nums2.length
*/

// Solution
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = (nums1, nums2, k) => {
	const heap = [];

	function push(pair) {
		heap.push(pair);

		let i = heap.length - 1;
		while (i > 0) {
			let parent = Math.floor((i - 1) / 2);
			if (heap[parent][0] <= heap[i][0]) {
				break;
			}

			[heap[parent], heap[i]] = [heap[i], heap[parent]];
			i = parent;
		}
	}

	function pop() {
		if (heap.length === 1) {
			return heap.pop();
		}

		const min = heap[0];
		heap[0] = heap.pop();
		let i = 0;

		while (true) {
			let smallest = i;
			let left = 2 * i + 1;
			let right = 2 * i + 2;

			if (left < heap.length && heap[left][0] < heap[smallest][0]) {
				smallest = left;
			}

			if (right < heap.length && heap[right][0] < heap[smallest][0]) {
				smallest = right;
			}

			if (smallest === i) {
				break;
			}
			[heap[i], heap[smallest]] = [heap[smallest], heap[i]];
			i = smallest;
		}
		return min;
	}

	for (let i = 0; i < Math.min(k, nums1.length); i++) {
		push([nums1[i] + nums2[0], i, 0]);
	}

	const result = [];

	while (result.length < k && heap.length > 0) {
		const [sum, i, j] = pop();

		result.push([nums1[i], nums2[j]]);
		if (j + 1 < nums2.length) {
			push([nums1[i] + nums2[j + 1], i, j + 1]);
		}
	}

	return result;
};

/**
 *  Insight
 */

// Test Cases
