/*
98. Validate Binary Search Tree
*/

var isValidBST = function(root) {
  let last = -Infinity, flag = true;
  inorder(root);
  return flag;

  function inorder(root) {
    if (!root)    return;

    inorder(root.left);
    if (last >= root.val)
      flag = false;
    last = root.val;
    inorder(root.right);
  }
};
