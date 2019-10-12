/*
19. Remove Nth Node From End of List
*/

var removeNthFromEnd = function(head, n) {
  var h = new ListNode(null);  //same as: var start = new ListNode(0);
  var ll = h, b = h;
  h.next = head;
  for (var  i = 0; i < n+1; i++) {
    b = b.next;
  }
  while (b !== null) {
    ll = ll.next;
    b= b.next;
  }
  ll.next = ll.next.next;
  return h.next;
 };

// Test
[1], n = 1;
[1,2,3,4,5], n = 2;

