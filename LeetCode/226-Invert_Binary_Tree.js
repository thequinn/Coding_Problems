/*
226. Invert Binary Tree

*/

var invertTree = function(root) {
    if (root == null)   return null;

    let left  = invertTree(root.left);
    let right = invertTree(root.right);
    root.right = left;
    root.left = right;

    return root;
};


