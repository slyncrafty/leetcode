/**
 *  242. Valid Anagram
 */
/*

Descriptions:
Given two strings s and t, return true if t is an of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

// Solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	const freqMap = new Map();
	for (const ch of s) {
		freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
	}
	for (let char of t) {
		if (!freqMap.get(char)) return false;
		freqMap.set(char, freqMap.get(char) - 1);
		if (freqMap.get(char) < 0) return false;
	}
	return true;
};

/**
 *  Lesson Learned
 */

// Test Cases
