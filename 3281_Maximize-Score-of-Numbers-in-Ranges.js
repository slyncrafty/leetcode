/**
 *  3281. Maximize Score of Numbers in Ranges
 */
/*

Descriptions:
You are given an array of integers start and an integer d, representing n intervals [start[i], start[i] + d].

You are asked to choose n integers where the ith integer must belong to the ith interval. The score of the chosen integers is defined as the minimum absolute difference between any two integers that have been chosen.

Return the maximum possible score of the chosen integers.

 

Example 1:

Input: start = [6,0,3], d = 2

Output: 4

Explanation:

The maximum possible score can be obtained by choosing integers: 8, 0, and 4. The score of these chosen integers is min(|8 - 0|, |8 - 4|, |0 - 4|) which equals 4.

Example 2:

Input: start = [2,6,13,13], d = 5

Output: 5

Explanation:

The maximum possible score can be obtained by choosing integers: 2, 7, 13, and 18. The score of these chosen integers is min(|2 - 7|, |2 - 13|, |2 - 18|, |7 - 13|, |7 - 18|, |13 - 18|) which equals 5.

 

Constraints:

    2 <= start.length <= 105
    0 <= start[i] <= 109
    0 <= d <= 109
*/

// Solution
/**
 * @param {number[]} start
 * @param {number} d
 * @return {number}
 */
const maxPossibleScore = (start, d) => {
	start.sort((a, b) => a - b);

	let left = 0;
	let right = start.at(-1) + d - start[0];
	while (left < right) {
		const mid = Math.ceil((left + right) / 2);

		if (canAchieve(start, d, mid)) {
			left = mid;
		} else {
			right = mid - 1;
		}
	}
	return left;
};

function canAchieve(start, d, score) {
	let previous = start[0];

	for (let i = 1; i < start.length; i++) {
		const current = Math.max(start[i], previous + score);

		if (current > start[i] + d) {
			return false;
		}

		previous = current;
	}

	return true;
}

/**
 *  Insight
 */

// Test Cases
