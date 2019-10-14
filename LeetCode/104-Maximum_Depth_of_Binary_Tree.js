/*
104. Maximum Depth of Binary Tree

ex. 3
   / \
  9  20
    /  \
   15   7
*/


var maxDepth = function(root) {
  let dep = 0, leftMax = 0, rightMax = 0;
  return helper(root, dep, leftMax, rightMax);
}

var helper = function(root, dep, leftMax, rightMax) {
  if (root === null)  return 0;
  
  if (root.left !== null)
    leftMax = helper(root.left, leftMax, rightMax);
  else  
    leftMax = 0;
  
  if (root.right !== null)
    rightMax = helper(root.right, leftMax, rightMax);
  else 
    rightMax = 0;
 
  return 1 + Math.max(leftMax, rightMax);
};


