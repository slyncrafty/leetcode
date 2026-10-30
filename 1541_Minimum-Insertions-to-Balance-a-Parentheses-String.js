/**
 *  1541. Minimum Insertions to Balance a Parentheses String
 */
/*

Descriptions:
You are given a parentheses string s containing only the characters '(' and ')'. A parentheses string is balanced if it can be formed using the following rules:

    The empty string is balanced.
    If A is balanced, then '(' + A + '))' is balanced.
    If A and B are balanced, then their concatenation is balanced.

In other words, every left parenthesis '(' must have a corresponding pair of two consecutive right parentheses '))' that comes after it, and every right parenthesis must belong to exactly one such matching pair.

For example, "())", "())(())))" and "(())())))" are balanced, while ")()", "()))" and "(()))" are not balanced.

You can insert the characters '(' and ')' at any position of the string to balance it if needed.

Return the minimum number of insertions needed to make s balanced.

 

Example 1:

Input: s = "(()))"

Output: 1

Explanation:

The second '(' is matched with two consecutive ')', but the first '(' has only one matching ')'. We need to insert one more ')' at the end to make the string "(())))", which is balanced.

Example 2:

Input: s = "())"

Output: 0

Explanation:

The string is already balanced because its '(' is followed by two consecutive ')', and both right parentheses belong to that matching pair.

Example 3:

Input: s = "))())("

Output: 3

Explanation:

Insert '(' at the beginning to match the first '))', and insert '))' at the end to match the last '('. Three insertions are needed in total.

 
Constraints:
1 <= s.length <= 105
s consists of '(' and ')' only.
*/

// Solution
/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = function (s) {
	let numLeft = 0;
	let insertions = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			numLeft++;
		} else {
			if (i + 1 < s.length && s[i + 1] === ')') {
				i++;
			} else {
				insertions++;
			}

			if (numLeft > 0) {
				numLeft--;
			} else {
				insertions++;
			}
		}
	}
	return insertions + numLeft * 2;
};

/**
 *  Insight
 */

// Test Cases
