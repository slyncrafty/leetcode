/**
 *  1249. Minimum Remove to Make Valid Parentheses
 */
/*

Descriptions:
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

    It is the empty string, contains only lowercase characters, or
    It can be written as AB (A concatenated with B), where A and B are valid strings, or
    It can be written as (A), where A is a valid string.

 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

 

Constraints:

    1 <= s.length <= 105
    s[i] is either '(' , ')', or lowercase English letter.

*/

// Solution
/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
	let open = 0;
	const excessCloseRemoved = [];
	for (const char of s) {
		if (char === '(') {
			open++;
		} else if (char === ')') {
			if (open > 0) {
				open--;
			} else {
				continue;
			}
		}
		excessCloseRemoved.push(char);
	}

	let result = [];
	for (let i = excessCloseRemoved.length - 1; i >= 0; i--) {
		if (excessCloseRemoved[i] === '(' && open > 0) {
			open--;
		} else {
			result.push(excessCloseRemoved[i]);
		}
	}

	return result.reverse().join('');
};

/**
 *  Insight
 */

// Test Cases
