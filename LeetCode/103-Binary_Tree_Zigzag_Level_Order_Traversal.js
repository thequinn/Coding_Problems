/*
103. Binary Tree Zigzag Level Order Traversal

*/


var zigzagLevelOrder = function(root) {
  let res = [];
  helper(root, 0, res);
  return res;
};

var helper = function(node, level, res){
  if(!node)     return;

  if(!res[level])     res[level] = [];

  level % 2 ? res[level].unshift(node.val) : res[level].push(node.val);

  helper(node.left, level + 1, res);
  helper(node.right, level + 1, res);
}

