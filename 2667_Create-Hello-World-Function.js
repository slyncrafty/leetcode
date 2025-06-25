/**
 *  2667. Create Hello World Function
 */
/*

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".

Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".

 

Constraints:

    0 <= args.length <= 10

*/



// Solution
/**
 * @return {Function} A function that always returns "Hello World" regardless of arguments
 */
var createHelloWorld = function() {
    let value = "Hello World"
    return function(...args) {
        return value;
    }
};



/**
 * Lesson Learned
 * 
 * this type of function returning function can be helpful to understand memoizing
 * memoize is a higher-order function. It runs the original function only once and stores the result. And if function calls in the future, returns the cached result. 
 */
/*
function memoize(fn) {
     let called = false;
     let result;
     return function(...args) {
     if(!called) {
         result = fn(...args);
         called = true;
     }
     return result;    
}} 
const createHelloWorld = memoize(() => "Hello World");
console.log(createHelloWorld()); // "Hello World"
console.log(createHelloWorld("this and that")); // "Hello World"
*/


// Test Cases

const f = createHelloWorld();
f(); // "Hello World"
