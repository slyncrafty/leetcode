/**
 *  500. Keyboard Row
 */
/*

Descriptions:
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the American keyboard:

    the first row consists of the characters "qwertyuiop",
    the second row consists of the characters "asdfghjkl", and
    the third row consists of the characters "zxcvbnm".

 

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]

Output: ["Alaska","Dad"]

Explanation:

Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

Example 2:

Input: words = ["omk"]

Output: []

Example 3:

Input: words = ["adsdf","sfd"]

Output: ["adsdf","sfd"]

 

Constraints:

    1 <= words.length <= 20
    1 <= words[i].length <= 100
    words[i] consists of English letters (both lowercase and uppercase). 

*/

// Solution
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
	const rowMap = {};
	for (let c of 'qwertyuiop') rowMap[c] = 1;
	for (let c of 'asdfghjkl') rowMap[c] = 2;
	for (let c of 'zxcvbnm') rowMap[c] = 3;

	const result = [];

	for (let w of words) {
		const lower = w.toLowerCase();
		const row = rowMap[lower[0]];
		let valid = true;

		for (let ch of lower) {
			if (rowMap[ch] !== row) {
				valid = false;
				break;
			}
		}
		if (valid) result.push(w);
	}
	return result;
};
/**
 *  Lesson Learned
 */

// Test Cases
const test = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(actual, expected)) {
		console.log('✅Test Passed');
	} else {
		console.log('❌Test Failed');
	}
};

test(findWords(['Hello', 'Alaska', 'Dad', 'Peace']), ['Alaska', 'Dad']);
test(findWords(['omk']), []);
test(findWords(['adsdf', 'sfd']), ['adsdf', 'sfd']);
