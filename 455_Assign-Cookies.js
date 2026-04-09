/**
 *  455. Assign Cookies
 */
/*

Descriptions:
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

 

Example 1:

Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.

Example 2:

Input: g = [1,2], s = [1,2,3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2.

 

Constraints:

    1 <= g.length <= 3 * 104
    0 <= s.length <= 3 * 104
    1 <= g[i], s[j] <= 231 - 1

*/

// Solution
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);

	let i = 0;
	let j = 0;
	while (i < g.length && j < s.length) {
		if (g[i] <= s[j]) {
			i++;
		}
		j++;
	}
	return i;
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
	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

test(findContentChildren([1, 2, 3], [1, 1]), 1);
test(findContentChildren([1, 2], [1, 2, 3]), 2);
test(findContentChildren([1, 3, 3], [1, 2, 2, 2]), 1);
