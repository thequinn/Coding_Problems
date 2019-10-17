/*
102. Binary Tree Level Order Traversal

*/

var levelOrder = function(root) {
  if (root == null)   return [];

  let queue = [root], res = [];

  while (queue.length) {
    let len = queue.length;
    let subList = [];

    while (len--) {
      let node = queue.shift();
      subList.push(node.val);

      if (node.left)    queue.push(node.left);
      if (node.right)   queue.push(node.right);
    }
    res.push(subList);
  }
  return res;
}
