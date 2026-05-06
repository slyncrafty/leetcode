/**
 *  257. Binary Tree Paths
 */
/*

Descriptions:
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

 

Example 1:

Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:

Input: root = [1]
Output: ["1"]

 

Constraints:

    The number of nodes in the tree is in the range [1, 100].
    -100 <= Node.val <= 100

*/

// Solution
// DFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
	const result = [];

	function dfs(node, path) {
		if (!node) return;

		path += node.val;

		if (!node.left && !node.right) {
			result.push(path);
			return;
		}

		path += '->';
		dfs(node.left, path);
		dfs(node.right, path);
	}

	dfs(root, '');
	return result;
};

/**
 *  Lesson Learned
 */

// Test Cases
let root = [1, 2, 3, null, 5];
let expected = ['1->2->5', '1->3'];
