/*
189. Rotate Array
*/

var rotate = function(nums, k) {
  let arr1 = nums.slice(nums.length - k, nums.length);
  let arr2 = nums.slice(0, nums.length - k);

  return arr1.concat(arr2);
}

let nums = [1,2,3,4,5,6,7], k = 3;  //[5,6,7,1,2,3,4]
//let nums = [-1,-100,3,99], k = 2;  // [3,99,-1,-100]

rotate(nums, k);
console.log(nums);
