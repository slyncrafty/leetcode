/**
 *  1160. Find Words That Can Be Formed by Characters
 */
/*

Descriptions:
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once for each word in words).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

 

Constraints:

    1 <= words.length <= 1000
    1 <= words[i].length, chars.length <= 100
    words[i] and chars consist of lowercase English letters.

*/

// Solution
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
	const freqMap = (str) => {
		const map = new Map();
		for (const ch of str) {
			map.set(ch, (map.get(ch) || 0) + 1);
		}
		return map;
	};
	const charsMap = freqMap(chars);
	let sum = 0;
	for (const word of words) {
		const wordMap = freqMap(word);
		let isGood = true;
		for (const [ch, count] of wordMap) {
			if ((charsMap.get(ch) || 0) < count) {
				isGood = false;
				break;
			}
		}
		if (isGood) sum += word.length;
	}
	return sum;
};

/**
 *  Lesson Learned
 */

// Test Cases
