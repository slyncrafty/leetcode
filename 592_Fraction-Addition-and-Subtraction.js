/**
 *  592. Fraction Addition and Subtraction
 */
/*

Descriptions:
Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.

The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.

 

Example 1:

Input: expression = "-1/2+1/2"
Output: "0/1"

Example 2:

Input: expression = "-1/2+1/2+1/3"
Output: "1/3"

Example 3:

Input: expression = "1/3-1/2"
Output: "-1/6"

 

Constraints:

    The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
    Each fraction (input and output) has the format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
    The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1, 10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
    The number of given fractions will be in the range [1, 10].
    The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.

*/

// Solution
/**
 * @param {string} expression
 * @return {string}
 */
const fractionAddition = (expression) => {
	function gcd(a, b) {
		a = Math.abs(a);
		b = Math.abs(b);
		if (b === 0) {
			return a;
		}
		return gcd(b, a % b);
	}

	let numerator = 0;
	let denominator = 1;

	let i = 0;
	while (i < expression.length) {
		let sign = 1;
		if (expression[i] === '-') {
			sign = -1;
			i++;
		} else if (expression[i] === '+') {
			i++;
		}

		let num = 0;

		while (i < expression.length && expression[i] !== '/') {
			num = num * 10 + Number(expression[i]);
			i++;
		}

		i++;

		let den = 0;

		while (
			i < expression.length &&
			expression[i] !== '+' &&
			expression[i] !== '-'
		) {
			den = den * 10 + Number(expression[i]);
			i++;
		}

		num *= sign;

		numerator = numerator * den + num * denominator;
		denominator *= den;

		let divisor = gcd(numerator, denominator);

		numerator /= divisor;
		denominator /= divisor;
	}

	return `${numerator}/${denominator}`;
};

/**
 *  Insight
 */

// Test Cases
