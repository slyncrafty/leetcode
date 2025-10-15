/**
 *  17. Letter Combinations of a Phone Number
 */
/*

Descriptions:
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = "2"
Output: ["a","b","c"]

 

Constraints:

    1 <= digits.length <= 4
    digits[i] is a digit in the range ['2', '9'].

*/

// Solution
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits === '') return [];
	const map = {
		2: 'abc',
		3: 'def',
		4: 'ghi',
		5: 'jkl',
		6: 'mno',
		7: 'pqrs',
		8: 'tuv',
		9: 'wxyz',
	};
	const result = [];
	const path = [];

	function backtrack(index) {
		if (index === digits.length) {
			result.push(path.join(''));
			return;
		}
		for (const char of map[digits[index]]) {
			path.push(char);
			backtrack(index + 1);
			path.pop();
		}
	}
	backtrack(0);
	return result;
};

/**
 *  Lesson Learned
 */

// Test Cases
const digitsArr = ['23', '2'];
const expectedArr = [
	['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
	['a', 'b', 'c'],
];

const strictEqualArray = (a, b) => {
	let ok = false;
	if (a === b) ok = true;
	if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('Correct!');
	else console.log('Incorrect!', a, b);
	return ok;
};

for (let i = 0; i < digitsArr.length; i++) {
	strictEqualArray(letterCombinations(digitsArr[i]), expectedArr[i]);
}
