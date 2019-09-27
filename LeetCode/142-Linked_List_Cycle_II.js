/*
142. Linked List Cycle II

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

