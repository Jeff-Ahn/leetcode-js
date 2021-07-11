// 207. Course Schedule
// Difficulty: Easy

/* Description */
// Given the head of a singly linked list, reverse the list, and return the reversed list.

/* Constraints */
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

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
  if (!head) return head;
  let newHead = null;
  const reverse = (head, prev = null) => {
    if (!head.next) {
      head.next = prev;
      newHead = head;
      return;
    }
    if (prev) {
      reverse(head.next, head);
      head.next = prev;
    } else {
      reverse(head.next, head);
      head.next = null;
    }
  };
  reverse(head);
  return newHead;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = head;

  let prev = null;
  while (node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};
