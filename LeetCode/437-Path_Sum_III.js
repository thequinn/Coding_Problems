/*
437. Path Sum III

*/

const pathSum = (root, sum) => {
  if (!root)
    return 0;

  const dfs = (root, sum) => {
    let count = 0;
    if (!root)
      return 0;
    if (root.val == sum)
      count +=1;
    count += dfs(root.left , sum - root.val);
    count += dfs(root.right, sum - root.val);
    return count;
  };

  return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

