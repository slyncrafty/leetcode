/**
 *  640. Solve the Equation
 */
/*

Descriptions:
Solve a given equation and return the value of 'x' in the form of a string "x=#value". The equation contains only '+', '-' operation, the variable 'x' and its coefficient. You should return "No solution" if there is no solution for the equation, or "Infinite solutions" if there are infinite solutions for the equation.

If there is exactly one solution for the equation, we ensure that the value of 'x' is an integer.

 

Example 1:

Input: equation = "x+5-3+x=6+x-2"
Output: "x=2"

Example 2:

Input: equation = "x=x"
Output: "Infinite solutions"

Example 3:

Input: equation = "2x=x"
Output: "x=0"

 

Constraints:

    3 <= equation.length <= 1000
    equation has exactly one '='.
    equation consists of integers with an absolute value in the range [0, 100] without any leading zeros, and the variable 'x'.
    The input is generated that if there is a single solution, it will be an integer.

*/

// Solution
/**
 * @param {string} equation
 * @return {string}
 */
const solveEquation = (equation) => {
	const [left, right] = equation.split('=');

	function calculate(str) {
		let xCount = 0;
		let constant = 0;

		let sign = 1;
		let i = 0;

		while (i < str.length) {
			if (str[i] === '+') {
				sign = 1;
				i++;
			} else if (str[i] === '-') {
				sign = -1;
				i++;
			}
			let num = 0;
			while (i < str.length && !isNaN(Number(str[i]))) {
				num = num * 10 + Number(str[i]);
				i++;
			}
			if (str[i] === 'x') {
				xCount += sign * (num === 0 ? 1 : num);
				i++;
			} else {
				constant += sign * num;
			}
		}
		return [xCount, constant];
	}

	const [leftXCount, leftConstant] = calculate(left);
	const [rightXCount, rightConstant] = calculate(right);

	const coefficient = leftXCount - rightXCount;
	const constant = rightConstant - leftConstant;

	if (coefficient === 0) {
		return constant === 0 ? 'Infinite solutions' : 'No solution';
	}
	return `x=${constant / coefficient}`;
};

/**
 *  Insight
 */

// Test Cases
