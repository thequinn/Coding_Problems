/*
105. Construct Binary Tree from Preorder and Inorder Traversal

*/

var buildTree = function(preorder, inorder) {
  p = i = 0

  build = function(stop) {
    if (inorder[i] != stop) {
      var root = new TreeNode(preorder[p++])
      root.left = build(root.val)
      i++
      root.right = build(stop)
      return root
    }
    return null
  }

  return build()
};


/*
preorder = [1, 2, 4, 5, 3, 6]
inorder = [4, 2, 5, 1, 6, 3]

Answer: [3,9,20,null,null,15,7]
*/
