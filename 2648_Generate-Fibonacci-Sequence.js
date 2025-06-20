/**
 *  2648. Generate Fibonacci Sequence
 */
/*

Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

 

Example 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3

Example 2:

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted

 

Constraints:

    0 <= callCount <= 50

*/



// Solution
var fibGenerator = function*() {
    let prev = 0, curr = 1, next;
    yield prev;
    yield curr;
    while(true) {
        yield next = prev + curr;
        prev = curr;
        curr = next;
    }
};



var fibGenerator = function*() {
    let [prev, curr] = [0, 1];
    yield prev;
    while(true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
};



/**
 * Lesson Learned
 * 
 * Generator is a subclass of the hidden Iterator class.
 * Generator.prototype.next() returns an object with two properties done and value
 * 
 */



// Test Cases
const output = [];
const gen = fibGenerator(); 
const callCount = 5; 
for(let i = 0; i < callCount; i++) {
    output.push(gen.next().value);
}
console.log(output); // [0, 1, 1, 2, 3]