/*
169. Majority Element

*/

const majorityElement = function(nums, lo = 0, hi = null) {

  const helper = function(lo, hi) {

    if (lo == hi)   return nums[lo];

    let mid = lo + Math.floor( (hi-lo)/2 );
    let left  = helper(lo   , mid);
    let right = helper(mid+1, hi );


    if (left == right)    return left;
    let leftCount = 0, rightCount = 0;
    for (let i = lo; i <= hi; i++) {
      if (nums[i] == left )  leftCount++;
      if (nums[i] == right)  rightCount++;
    }
    return leftCount > rightCount ? left : right;
  };

  return helper(0, nums.length - 1);
};

//---------- Testing ----------
//let nums =  [2,2,1,1,1,2,2];
let nums = [6,5,5];

let res = majorityElement(nums);
console.log("res:", res);
