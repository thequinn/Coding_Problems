/*
Reference:

- Approach #1: Recursion (Iterative approach is more important for the problem!)
https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/

- Approach #2: Iterative solution DFS and BFS
https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/34195/Two-Java-Iterative-solution-DFS-and-BFS

*/

// Approach #1: Recursion (Iterative approach is more important for the problem!)
var maxDepth = function(root) {
  if (root === null)    return 0;

  var leftDepth = maxDepth(root.left);
  var rightDepth = maxDepth(root.right);

  var bigger = Math.max(leftDepth, rightDepth);
  return ++bigger;
}


// Approach #2: Iterative solution DFS and BFS
//.........
//.........
//.........


//--------------------------------------------
// Testing Part:

var printTree = function(root) {
  if (root === null)  return;

  console.log(root.val);
  printTree(root.left);
  printTree(root.right);
}

var TreeNode = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Create a tree for testing
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Print out the tree just created
//printTree(root);

console.log(maxDepth(root));

