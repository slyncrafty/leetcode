/**
 *  709. To Lower Case
 */
/*

Descriptions:
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

Example 1:

Input: s = "Hello"
Output: "hello"

Example 2:

Input: s = "here"
Output: "here"

Example 3:

Input: s = "LOVELY"
Output: "lovely"

 

Constraints:

    1 <= s.length <= 100
    s consists of printable ASCII characters.

*/

// Solution
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
	let res = '';
	for (const ch of s) {
		if (ch >= 'A' && ch <= 'Z') {
			res += String.fromCharCode(ch.charCodeAt(0) + 32);
		} else res += ch;
	}
	return res;
};

/**
 *  Lesson Learned
 */

// Test Cases
