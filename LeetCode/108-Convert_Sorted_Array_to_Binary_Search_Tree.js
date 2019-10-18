/*
108. Convert Sorted Array to Binary Search Tree

*/

var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;   

    var mid = Math.floor((nums.length)/2);
    var root = new TreeNode(nums[mid]);
   
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root;
}

