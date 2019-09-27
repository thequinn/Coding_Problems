var hasCycle = function(head) {
  const nodes = new Set();

  while (head) {
    if (nodes.has(head))  
      return true;
    else  
      nodes.add(head);
    head = head.next;
  }
  return false;
};

