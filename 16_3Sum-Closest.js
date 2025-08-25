/**
 *  16. 3Sum Closest
 */
/*

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

 

Constraints:

    3 <= nums.length <= 500
    -1000 <= nums[i] <= 1000
    -104 <= target <= 104

*/



// Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    const n = nums.length;
    let closest = nums[0] + nums[1] + nums[2];

    for(let i = 0; i < n - 2; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;

        // define two pointers and iterate
        let j = i + 1, k = n - 1;
        while(j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if(sum === target) return sum;
            if(Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
            if(sum < target) j++;
            else k--;
        }
    }
    return closest;
}



/**
 *  Lesson Learned
 */



// Test Cases
console.log(threeSumClosest([-1,2,1,-4], 1), 2);
console.log(threeSumClosest([0,0,0], 1), 0);
