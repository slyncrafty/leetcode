/**
 *  169. Majority Element
 */
/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/



// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const freqMap = {};
    const tol = nums.length / 2;
    
    for(num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if(freqMap[num] > tol) return num;
    }
    return null;
};



// Boyer-Moore O(1) extra space
const majorityElement = function(nums) {
    let candidate = null, count = 0;
    for (const num of nums) {
        if(count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}



/**
 *  Lesson Learned
 *  Boyer-Moore majority vote algo finds solution with constant space(O(1)).
 */



// Test Cases
console.log(majorityElement([3,2,3]), 3);
console.log(majorityElement([2,2,1,1,1,2,2]), 2);