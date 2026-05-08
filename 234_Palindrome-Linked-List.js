/**
 *  234. Palindrome Linked List
 */
/*

Descriptions:
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
 * @return {boolean}
 */
// var isPalindrome = function (head) {
// 	const arr = [];
// 	while (head) {
// 		arr.push(head.val);
// 		head = head.next;
// 	}

// 	let l = 0,
// 		r = arr.length - 1;
// 	while (l < r) {
// 		if (arr[l] !== arr[r]) return false;
// 		(l++, r--);
// 	}
// 	return true;
// };
var isPalindrome = function (head) {
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	let prev = null;
	let curr = slow;
	while (curr) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	let left = head;
	let right = prev;
	while (right) {
		if (left.val !== right.val) return false;
		left = left.next;
		right = right.next;
	}
	return true;
};

/**
 *  Lesson Learned
 */

// Test Cases
