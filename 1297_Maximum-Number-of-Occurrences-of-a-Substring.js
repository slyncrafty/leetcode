/**
 *  1297. Maximum Number of Occurrences of a Substring
 */
/*

Descriptions:
Given a string s, return the maximum number of occurrences of any substring under the following rules:

    The number of unique characters in the substring must be less than or equal to maxLetters.
    The substring size must be between minSize and maxSize inclusive.

 

Example 1:

Input: s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
Output: 2
Explanation: Substring "aab" has 2 occurrences in the original string.
It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).

Example 2:

Input: s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
Output: 2
Explanation: Substring "aaa" occur 2 times in the string. It can overlap.

 

Constraints:

    1 <= s.length <= 105
    1 <= maxLetters <= 26
    1 <= minSize <= maxSize <= min(26, s.length)
    s consists of only lowercase English letters.

*/

// Solution
const maxFreq = function (s, maxLetters, minSize, maxSize) {
	const charFreq = new Map();
	const subStrFreq = new Map();

	let left = 0;
	let max = 0;
	for (let right = 0; right < s.length; right++) {
		charFreq.set(s[right], (charFreq.get(s[right]) || 0) + 1);
		if (right - left + 1 > minSize) {
			charFreq.set(s[left], charFreq.get(s[left] - 1));
			if (charFreq.get(s[left]) === 0) {
				charFreq.delete(s[left]);
			}
			left++;
		}
		if (right - left + 1 === minSize) {
			if (charFreq.size <= maxSize) {
				const substr = s.substring(left, right + 1);
				subStrFreq.set(substr, (subStrFreq.get(substr) || 0) + 1);
				max = Math.max(max, subStrFreq.get(substr));
			}
		}
	}
	return max;
};
/**
 *  Insight
 */

// Test Cases
