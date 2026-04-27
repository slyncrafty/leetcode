/**
 *  222. Count Complete Tree Nodes
 */
/*

Descriptions:
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.

 

Example 1:

Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:

Input: root = []
Output: 0

Example 3:

Input: root = [1]
Output: 1

 

Constraints:

    The number of nodes in the tree is in the range [0, 5 * 104].
    0 <= Node.val <= 5 * 104
    The tree is guaranteed to be complete.

*/

// Solution
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
function buildTree(arr) {
	if (!arr.length) return null;

	const root = new TreeNode(arr[0]);
	const queue = [root];
	let i = 1;

	while (i < arr.length) {
		const node = queue.shift();

		if (arr[i] != null) {
			node.left = new TreeNode(arr[i]);
			queue.push(node.left);
		}
		i++;

		if (i < arr.length && arr[i] != null) {
			node.right = new TreeNode(arr[i]);
			queue.push(node.right);
		}
		i++;
	}

	return root;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
	if (!root) return 0;

	function getLeftHeight(node) {
		let height = 0;
		while (node) {
			height++;
			node = node.left;
		}
		return height;
	}

	function getRightHeight(node) {
		let height = 0;
		while (node) {
			height++;
			node = node.right;
		}
		return height;
	}

	const leftHeight = getLeftHeight(root);
	const rightHeight = getRightHeight(root);

	if (leftHeight === rightHeight) {
		return (1 << leftHeight) - 1;
	}
	return 1 + countNodes(root.left) + countNodes(root.right);
};

/**
 *  Lesson Learned
 */

// Test Cases
const test = (actual, expected) => {
	console.log(actual === expected ? '✅Test Passed' : '❌Test Failed');
};
test(countNodes(buildTree([1, 2, 3, 4, 5, 6])), 6);
test(countNodes(buildTree([])), 0);
test(countNodes(buildTree([1])), 1);
