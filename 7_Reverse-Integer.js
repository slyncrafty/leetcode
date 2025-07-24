/**
 *  7. Reverse Integer
 */
/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

 

Constraints:

    -231 <= x <= 231 - 1


*/



// Solution
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    // set bounds for integer
    const minInt = -(2**31);
    const maxInt = 2**31 - 1;
    const minDigit= minInt % 10;
    const maxDigit = maxInt % 10;

    let res = 0;
    // loop to pop last digits and append it to result
    while(x !== 0) {
        // take the last digit from x
        const digit = x % 10;
        x = (x / 10) | 0;
        // check out of bounds
        if(res > maxInt / 10 || (res === maxInt / 10 && digit > maxRange)) return 0;
        if(res < minInt / 10 || (res === minInt / 10 && digit < minRange)) return 0;
        // append digit to result
        res = res * 10 + digit;
    }
    return res;
};



// Version using absolute
const reverse = function(x) {
    const LIMIT = 2 ** 31;
    const sign = x < 0 ? -1 : 1;
    let n = Math.abs(x);
    let res = 0;

    while(n > 0) {
        const digit = n % 10;
        n = Math.floor(n / 10);
        res = res * 10 + digit;
    }
        if(res >= LIMIT) return 0;
    return rev * sign;
}



/**
 *  Lesson Learned
 *  x = (x / 10) | 0;
 *  dividing by 10 and Bitwise operator (| 0) convert the operand to a 32-bit signed int
 *  drop any faction.
 */



// Test Cases
console.log(reverse(123), 321);
console.log(reverse(-123), -321);
console.log(reverse(120), 21);