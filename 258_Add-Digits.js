/**
 *  258. Add Digits
 */
/*

Descriptions:
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0

 

Constraints:

    0 <= num <= 231 - 1

 

Follow up: Could you do it without any loop/recursion in O(1) runtime?
 
*/

// Solution
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	while (num >= 10) {
		let sum = 0;
		while (num > 0) {
			sum += num % 10;
			num = Math.floor(num / 10);
		}
		num = sum;
	}
	return num;
};

/**
 *  Lesson Learned
 */

// Test Cases
let num = 38,
	expected = 2;
