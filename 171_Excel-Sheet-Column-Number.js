/**
 *  171. Excel Sheet Column Number
 */
/*

Descriptions:
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

 

Example 1:

Input: columnTitle = "A"
Output: 1

Example 2:

Input: columnTitle = "AB"
Output: 28

Example 3:

Input: columnTitle = "ZY"
Output: 701

 

Constraints:

    1 <= columnTitle.length <= 7
    columnTitle consists only of uppercase English letters.
    columnTitle is in the range ["A", "FXSHRXW"].

*/

// Solution
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
	let result = 0;
	for (let i = 0; i < columnTitle.length; i++) {
		const value = columnTitle.charCodeAt(i) - 64;
		result = result * 26 + value;
	}
	return result;
};

/**
 *  Lesson Learned
 */

// Test Cases
const test = (actual, expected) => {
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

test(titleToNumber('A'), 1);
test(titleToNumber('AB'), 28);
test(titleToNumber('ZY'), 701);
