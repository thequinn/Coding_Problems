/*
206. Reverse Linked List
*/

var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextTmp = curr.next;  

    curr.next = prev;

    prev = curr;
    curr = nextTmp;
  }
  return prev;
};


