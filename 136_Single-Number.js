/**
 *  136. Single Number
 */
/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

 

Constraints:

    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.


*/



// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   return nums.reduce((acc, x) => acc ^ x, 0);
};


/**
 *  Lesson Learned
 *  Bitwise XOR(^) operator
 *  bitwise XOR(^) operator returns a number of BigInt whose binary representation has a 1 in each bit pos for which the corresponding bits of either but not both operands are 1. (MDN)
 *  x  |  y  | x ^ y
 *  0  |  0  |   0
 *  0  |  1  |   1
 *  1  |  0  |   1
 *  1  |  1  |   0 
 *  that is, properties:
 *  x ^ x = 0 
 *  x ^ 0 = x
 *  XOR is communicative & associative.
 *  In this solution, using the (x ^ x = 0) property of XOR, we can reach:
 *  the one element that appears only once in the given array.
 */



// Test Cases
const arrays = [
    [2,2,1],
    [4,1,2,1,2],
    [1],
];

const expected = [
    1,
    4,
    1,
];

for(let i = 0; i < arrays.length; i++) {
    console.log(singleNumber(arrays[i]), expected[i]);
}
