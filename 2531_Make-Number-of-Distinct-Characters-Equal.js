/**
 *  2531. Make Number of Distinct Characters Equal
 */
/*

Descriptions:
You are given two 0-indexed strings word1 and word2.

A move consists of choosing two indices i and j such that 0 <= i < word1.length and 0 <= j < word2.length and swapping word1[i] with word2[j].

Return true if it is possible to get the number of distinct characters in word1 and word2 to be equal with exactly one move. Return false otherwise.

 

Example 1:

Input: word1 = "ac", word2 = "b"
Output: false
Explanation: Any pair of swaps would yield two distinct characters in the first string, and one in the second string.

Example 2:

Input: word1 = "abcc", word2 = "aab"
Output: true
Explanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = "abac" and word2 = "cab", which both have 3 distinct characters.

Example 3:

Input: word1 = "abcde", word2 = "fghij"
Output: true
Explanation: Both resulting strings will have 5 distinct characters, regardless of which indices we swap.

 

Constraints:

    1 <= word1.length, word2.length <= 105
    word1 and word2 consist of only lowercase English letters.

*/

// Solution
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function (word1, word2) {
	const characters1 = Array(26).fill(0);
	const characters2 = Array(26).fill(0);

	for (const ch of word1) {
		characters1[ch.charCodeAt(0) - 97]++;
	}
	for (const ch of word2) {
		characters2[ch.charCodeAt(0) - 97]++;
	}

	const distinct1 = characters1.filter((e) => e > 0).length;
	const distinct2 = characters2.filter((e) => e > 0).length;

	for (let i = 0; i < 26; i++) {
		if (characters1[i] === 0) {
			continue;
		}
		for (let j = 0; j < 26; j++) {
			if (characters2[j] === 0) {
				continue;
			}
			let d1 = distinct1;
			let d2 = distinct2;
			if (characters1[i] === 1) d1--;
			if (characters2[i] === 0) d2++;
			if (characters2[j] === 1) d2--;
			if (characters1[j] === 0) d1++;
			if (d1 === d2) {
				return true;
			}
		}
	}
	return false;
};

/**
 *  Insight
 *
 *  focus on the number of distinct characters
 *
 *  26 lowercase alphabets x 26 lowercase alphabets
 *  brute force compare all possible pair of swaps
 */

// Test Cases
