/*
142. Linked List Cycle II

Algorithm used:
-  Tortoise-Hare Algorithm (Floyd's Cycle Detection) 


Solution:

(1) 思路：(不用這裡的Code, 用下方的比較簡單)
-- https://leetcode.com/problems/linked-list-cycle-ii/discuss/286362/JavaScript-Solution-with-illustrations-explanation
-- Quinn's 解釋：
  用LeetCode 141. Linked List Cycle 確認cycle.  再用slow ptr 一步步走，同時
  head ptr 也一步步走。若這兩個ptrs的數相等，則找到cycle開頭.

(2) Code:
-- https://leetcode.com/problems/linked-list-cycle-ii/discuss/44897/Python-solution-with-comments.

*/

var detectCycle = function(head) {
  let fast = head;
  let slow = head;
  
  // Not testing fast.next is null will cause error in ln-55:
  // - ex. If a Linked List is [1] and has no cycle
  //      -> fast.next returns null: Correct
  //      -> fast.next.next will be null.next: ERROR
  //
  //while (fast) {
  //
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
   
    //....................................Need to add code........???
    

  }
  return false;
};

