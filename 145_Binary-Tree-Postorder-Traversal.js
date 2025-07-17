/**
 *  145 Binary Tree Postorder Traversal
 */
/*

Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

Example 1:

Input: root = [1,null,2,3]

Output: [3,2,1]

Explanation:

Example 2:

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [4,6,7,5,2,9,8,3,1]

Explanation:

Example 3:

Input: root = []

Output: []

Example 4:

Input: root = [1]

Output: [1]

 

Constraints:

    The number of the nodes in the tree is in the range [0, 100].
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
// Recursive solution
// var postorderTraversal = function(root) {
//     const ans = [];
//     if(!root) return ans;
//     // left - right - node
//     function dfs(node) {
//         if(!node) return;
//         dfs(node.left);
//         dfs(node.right);
//         ans.push(node.val);
//     }
//     dfs(root);
//     return ans;
// };



// Iterative solution
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function(root) {
    const ans = [];
    if(!node) return ans;

    const stack = [root];
    while(stack.length) {
        const node = stack.pop();
        ans.push(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    ans.reverse();
    return ans;
}



/**
 *  Lesson Learned
 *  Reverse of pre-order = post-order
 *  Iterative solution accumulates values in to an array in pre-order 
 *  and reverse the resulting array before returning it to get post-order.
 */



// Test Cases
console.log(postorderTraversal([1,null,2,3]), [3,2,1]);
console.log(postorderTraversal([1,2,3,4,5,null,8,null,null,6,7,9]), [4,6,7,5,2,9,8,3,1]);
console.log(postorderTraversal([]), []);
console.log(postorderTraversal([1]), [1]);