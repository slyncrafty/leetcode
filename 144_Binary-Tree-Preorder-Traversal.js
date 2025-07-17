/**
 *  144. Binary Tree Preorder Traversal
 */
/*

Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:

Input: root = [1,null,2,3]

Output: [1,2,3]

Explanation:

Example 2:

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [1,2,4,5,6,7,3,8,9]

Explanation:

Example 3:

Input: root = []

Output: []

Example 4:

Input: root = [1]

Output: [1]

 

Constraints:

    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100

 

Follow up: Recursive solution is trivial, could you do it iteratively?

*/



// Solution
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const ans = [];
    if(!root) return ans;
    function dfs(node) {
        if(!node) return;
        ans.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return ans;
};



/**
 *  Lesson Learned
 *  Recursive solution to traverse input tree in pre-order which is left - right - root.
 */



// Test Cases
console.log(preorderTraversal([1,null,2,3]), [1,2,3]);
console.log(preorderTraversal([1,2,3,4,5,null,8,null,null,6,7,9]), [1,2,4,5,6,7,3,8,9]);
console.log(preorderTraversal([]), []);
console.log(preorderTraversal([1]), [1]);