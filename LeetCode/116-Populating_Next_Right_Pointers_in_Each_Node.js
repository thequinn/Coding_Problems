/*
116. Populating Next Right Pointers in Each Node
*/

var connectBFS = function(root) {
  if (root == null)   return root;

  let queue = [root];
  while(queue.length != 0) {
    let next = [];

    while(queue.length != 0) {
      let node = queue.shift();

      node.next = queue[0] || null;

      if (node.left != null) {
        next.push(node.left);
        next.push(node.right);
      }
    }

    queue = next;
  }

  return root;
};


