/**
 * 2727. Is Object Empty
 */
/*

Descriptions:
Given an object or an array, return if it is empty.

    An empty object contains no key-value pairs.
    An empty array contains no elements.

You may assume the object or array is the output of JSON.parse.

 

Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.

Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.

Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.

 

Constraints:

    obj is a valid JSON object or array
    2 <= JSON.stringify(obj).length <= 105

 
Can you solve it in O(1) time?
*/

// Solution
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
	if (Array.isArray(obj)) return obj.length === 0;
	return Object.keys(obj).length === 0;
};

/**
 *  Lesson Learned
 */

// Test Cases
const test = (actual, expected) => {
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
test(isEmpty({ x: 5, y: 42 }), false);
test(isEmpty({}), true);
test(isEmpty([null, false, 0]), false);
