/*
21. Merge Two Sorted Lists
*/

var mergeTwoLists = function(l1, l2) {
  var result = new ListNode(0);
  var cur = result;

  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      cur.next = l2;
      l2 = l2.next;
    }
    else {
      cur.next = l1;
      l1 = l1.next;
    }
    cur = cur.next;
  }

  if (l1 !== null)    cur.next = l1;
  if (l2 !== null)    cur.next = l2;

  return result.next;
}
