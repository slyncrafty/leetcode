/**
 *  191_Number-of-1-Bits.js
 */
/*

Given a positive integer n, write a function that returns the number of

in its binary representation (also known as the Hamming weight).

 

Example 1:

Input: n = 11

Output: 3

Explanation:

The input binary string 1011 has a total of three set bits.

Example 2:

Input: n = 128

Output: 1

Explanation:

The input binary string 10000000 has a total of one set bit.

Example 3:

Input: n = 2147483645

Output: 30

Explanation:

The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

Constraints:

    1 <= n <= 231 - 1

 
Follow up: If this function is called many times, how would you optimize it?
*/



// Solution
/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
    return (n.toString(2).split('').filter(e => e !== '0').length);
};


/**
 *  Lesson Learned
 *   Hamming weight
 *   Hamming weight o a string is the number of symbols that are different from the zero-symbol of the alphabet used. 
 * Examples:
 * String 	Hamming weight
    11101 	        4
    11101000 	    4
    00000000 	    0
    678012340567 	10 
 */



// Test Cases
console.log(hammingWeight(11), 3);
console.log(hammingWeight(128), 1);
console.log(hammingWeight(2147483645), 30);
