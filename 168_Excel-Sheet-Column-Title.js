/**
 *  168. Excel Sheet Column Title
 */
/*

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

 

Example 1:

Input: columnNumber = 1
Output: "A"

Example 2:

Input: columnNumber = 28
Output: "AB"

Example 3:

Input: columnNumber = 701
Output: "ZY"

 

Constraints:

    1 <= columnNumber <= 231 - 1

*/



// Solution
/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
    let title = '';
    const offset = 'Z'.charCodeAt() - 'A'.charCodeAt() + 1;
    while( columnNumber > 0) {
        columnNumber--;
        const remainder = columnNumber % offset;
        title = String.fromCharCode('A'.charCodeAt() + remainder) + title;
        columnNumber = Math.floor(columnNumber / offset);
    }
    return title
};



/**
 *  Lesson Learned
 */



// Test Cases
console.log(convertToTitle(1), "A");
console.log(convertToTitle(28), "AB");
console.log(convertToTitle(701), "ZY");