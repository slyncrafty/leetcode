/**
 *  95. Unique Binary Search Trees II
 */
/*

Descriptions:
Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

 

Example 1:

Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

Example 2:

Input: n = 1
Output: [[1]]

 

Constraints:

    1 <= n <= 8

*/

// Solution
const generateTrees = (n) => {
	function buildTree(start, end) {
		if (start > end) {
			return [null];
		}

		const result = [];

		for (let i = start; i <= end; i++) {
			const leftTrees = buildTree(start, i - 1);
			const rightTrees = buildTree(i + 1, end);

			for (const left of leftTrees) {
				for (const right of rightTrees) {
					const root = new TreeNode(i);
					root.left = left;
					root.right = right;

					result.push(root);
				}
			}
		}
		return result;
	}

	return buildTree(1, n);
};

/**
 *  Insight
 */

// Test Cases
