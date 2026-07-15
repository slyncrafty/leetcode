/**
 *  383. Ransom Note
 */
/*

Descriptions:
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

 

Constraints:

    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.

*/

// Solution
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const map = new Map();
	for (const ch of magazine) {
		map.set(ch, (map.get(ch) || 0) + 1);
	}
	for (const ch of ransomNote) {
		if (!map.get(ch)) return false;
		map.set(ch, map.get(ch) - 1);
	}
	return true;
};

/**
 *  Lesson Learned
 */

// Test Cases
