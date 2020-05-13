/*
617. Merge Two Binary Trees
*/

var mergeTrees = function(t1, t2) {
  if (t1 == null)   return t2;
  if (t2 == null)   return t1;

  mergeTrees(t1.left, t2.left);
  t1.val += t2.val;
  mergeTrees(t1.right, t2.right);
  return t1;
};



