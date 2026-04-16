/**
 *  506. Relative Ranks
 */
/*

Descriptions:
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

    The 1st place athlete's rank is "Gold Medal".
    The 2nd place athlete's rank is "Silver Medal".
    The 3rd place athlete's rank is "Bronze Medal".
    For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").

Return an array answer of size n where answer[i] is the rank of the ith athlete.

 

Example 1:

Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

Example 2:

Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].


Constraints:

    n == score.length
    1 <= n <= 104
    0 <= score[i] <= 106
    All the values in score are unique.
*/

// Solution
/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
	const sorted = [...score].sort((a, b) => b - a);
	const map = new Map();

	sorted.forEach((s, i) => {
		const rank =
			i === 0
				? 'Gold Medal'
				: i === 1
					? 'Silver Medal'
					: i === 2
						? 'Bronze Medal'
						: String(i + 1);

		map.set(s, rank);
	});

	return score.map((s) => map.get(s));
};

/**
 *  Lesson Learned
 */

// Test Cases
const test = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) {
			return true;
		} else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

test(findRelativeRanks([5, 4, 3, 2, 1]), [
	'Gold Medal',
	'Silver Medal',
	'Bronze Medal',
	'4',
	'5',
]);
test(findRelativeRanks([10, 3, 8, 9, 4]), [
	'Gold Medal',
	'5',
	'Bronze Medal',
	'Silver Medal',
	'4',
]);
