/*
142. Linked List Cycle II
*/

var detectCycle = function(head) {
  let fast = head;
  let slow = head;
 
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
   
    //....................................Need to add code........???
    

  }
  return false;
};
