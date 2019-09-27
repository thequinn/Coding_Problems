/*
142. Linked List Cycle II
*/

var detectCycle = function(head) {
  let fast = head, slow = head;

  // Checking the fast.next condition below, see LeetCode 141.
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    // If there is a cycle
    if (slow === fast) {
      // head and slow ptrs move step by step
      while (head) {
        if (head === slow)  return head;
        head = head.next;
        slow = slow.next;
      }
    }
  }
  return null;
};

