/**
 *  392. Is Subsequence
 */
/*

Descriptions:
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

 

Constraints:

    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.

 
Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/

// Solution
/*
const isSubsequence = function (s, t) {
	let i = 0;
	for (const ch of t) {
		if (s[i] === ch && i < s.length) {
			i++;
		}
	}
	return i === s.length;
};
*/

// Follow up: Suppose there are lots of incoming s
// For each s, use Binary Search to find the first index of match
const isSubsequence = function (s, t) {
	const positionsT = new Map();
	for (let i = 0; i < t.length; i++) {
		if (!positionsT.has(t[i])) {
			positionsT.set(t[i], []);
		}
		positionsT.get(t[i]).push(i);
	}

	let prevIndex = -1;

	for (const ch of s) {
		if (!positionsT.has(ch)) {
			return false;
		}

		const indices = positionsT.get(ch);

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
			return false;
		}
		prevIndex = indices[left];
	}
	return true;
};

/**
 *  Insight
 */

// Test Cases
