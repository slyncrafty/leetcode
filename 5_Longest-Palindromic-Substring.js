/**
 *  5. Longest Palindromic Substring
 */
/*

Given a string s, return the longest

in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

 

Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters.

*/



// Solution
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    if(s.length < 2) return s;
    let start = 0, end = 0;

    for(let i = 0; i < s.length; i++) {
        const oddLen = checkAround(s, i, i);
        const evenLen = checkAround(s, i, i+1);
        const maxLen = Math.max(oddLen, evenLen);

        if(maxLen > end - start + 1) {
            start = i - Math.floor((maxLen -1)/2);
            end = i + Math.floor(maxLen/2);
        }
    }
    return s.slice(start, end+1);
}

// Using two pointer to search left and right
// returns the length of palindrome string
const checkAround = (str, left, right) => {
    while(left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}



/**
 *  Lesson Learned
 *  Palindrome exhibits symmetry, so we can start from 'center/pivot' and continue to search and expand left and igt of it to find the matching 
 */



// Test Cases
console.log(longestPalindrome("babad"), "bab");
console.log(longestPalindrome("cbbd"), "bb");
