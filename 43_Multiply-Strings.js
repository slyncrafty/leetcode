/**
 *  43. Multiply Strings
 */
/*

Descriptions:
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"

 

Constraints:

    1 <= num1.length, num2.length <= 200
    num1 and num2 consist of digits only.
    Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/

// Solution
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
	if (num1 === '0' || num2 === '0') {
		return '0';
	}

	const result = new Array(num1.length + num2.length).fill(0);

	for (let i = num1.length - 1; i >= 0; i--) {
		for (let j = num2.length - 1; j >= 0; j--) {
			const product = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);

			const posLow = i + j + 1;
			const posHigh = i + j;
			const sum = result[posLow] + product;

			result[posLow] = sum % 10;
			result[posHigh] += Math.floor(sum / 10);
		}
	}

	let start = 0;
	while (start < result.length - 1 && result[start] === 0) {
		start++;
	}
	return result.slice(start).join('');
};

/**
 *  Insight
 */

// Test Cases
