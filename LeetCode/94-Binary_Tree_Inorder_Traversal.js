/*
94. Binary Tree Inorder Traversal
*/

var inorderTraversal = function(root) {
  let res = [];
  return helper(root, res);
};

var helper = (root, arr) => {
  if (!root)    return arr;

  helper(root.left, arr);
  arr.push(root.val);
  helper(root.right, arr);
  return arr;
}

// Test Case: [1,2,3,null,null,6]
// Expected : [2,1,6,3]
