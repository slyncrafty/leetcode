/**
 *  459. Repeated Substring Pattern
 */
/*

Descriptions:
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:

Input: s = "aba"
Output: false

Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

 

Constraints:

    1 <= s.length <= 104
    s consists of lowercase English letters.

*/

// Solution
const repeatedSubstringPattern = function (s) {
	const n = s.length;
	for (let len = 1; len <= Math.floor(n / 2); len++) {
		if (n % len !== 0) continue;

		const pattern = s.substring(0, len);
		const repeatCount = n / len;

		if (pattern.repeat(repeatCount) === s) {
			return true;
		}
	}

	return false;
};

/**
 *  Insight
 */

// Test Cases
