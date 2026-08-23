/**
 *  792. Number of Matching Subsequences
 */
/*

Descriptions:
Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

    For example, "ace" is a subsequence of "abcde".

 

Example 1:

Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".

Example 2:

Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2

 

Constraints:

    1 <= s.length <= 5 * 104
    1 <= words.length <= 5000
    1 <= words[i].length <= 50
    s and words[i] consist of only lowercase English letters.

*/

// Solution
function numMatchingSubseq(s, words) {
	const positionsS = new Map();
	for (let i = 0; i < s.length; i++) {
		if (!positionsS.has(s[i])) {
			positionsS.set(s[i], []);
		}
		positionsS.get(s[i]).push(i);
	}

	let count = 0;

	for (const w of words) {
		let prevIndex = -1;
		let isSubseq = true;

		for (const ch of w) {
			if (!positionsS.has(ch)) {
				isSubseq = false;
				break;
			}

			const indices = positionsS.get(ch);
			let left = 0;
			let right = indices.length;

			while (left < right) {
				const mid = Math.floor((left + right) / 2);
				if (indices[mid] <= prevIndex) {
					left = mid + 1;
				} else {
					right = mid;
				}
			}

			if (left === indices.length) {
				isSubseq = false;
				break;
			}

			prevIndex = indices[left];
		}
		if (isSubseq) {
			count++;
		}
	}
	return count;
}
/**
 *  Insight
 */

// Test Cases
