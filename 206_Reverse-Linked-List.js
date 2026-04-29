/**
 *  206. Reverse Linked List
 */
/*

Descriptions:
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

 

Constraints:

    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000

 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

// Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let prev = null;
	let curr = head;
	while (curr) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
};

// recursion
// var reverseList = function (head) {
// 	if (!head || !head.next) return head;

// 	const newHead = reverseList(head.next);

// 	head.next.next = head;
// 	head.next = null;

// 	return newHead;
// };

/**
 *  Lesson Learned
 */

// Test Cases
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

function buildList(arr) {
	let dummy = new ListNode(0);
	let curr = dummy;

	for (let val of arr) {
		curr.next = new ListNode(val);
		curr = curr.next;
	}

	return dummy.next;
}

function listToArray(head) {
	const res = [];
	while (head) {
		res.push(head.val);
		head = head.next;
	}
	return res;
}

const test = (input, expected) => {
	const actual = listToArray(reverseList(buildList(input)));
	console.log(
		JSON.stringify(actual) === JSON.stringify(expected) ? '✅ PASS' : '❌ FAIL',
		actual,
	);
};

test(reverseList([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
test(reverseList([1, 2]), [2, 1]);
test(reverseList([]), []);
