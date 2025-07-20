/**
 *  3. Longest Substring Without Repeating Characters
*/
/*

Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/



// Solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const idxMap = new Map();
    let startIdx = 0, maxLen = 0;

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(idxMap.has(char) && idxMap.get(char) >= startIdx) {
            startIdx = idxMap.get(s[i]) + 1;
        }
        idxMap.set(s[i], i);
        maxLen = Math.max(maxLen, i - startIdx + 1);
    }
    return maxLen;
};



/**
 *  Lesson Learned
 */



// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb"), 3)
console.log(lengthOfLongestSubstring("bbbbb"), 1)
console.log(lengthOfLongestSubstring("pwwkew"), 3)
