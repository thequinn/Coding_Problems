/*
27. Remove Element
*/

var removeElement = function(nums, val) {
  let i = nums.length - 1;  // put slow ptr to end of nums[]
  let j = 0;

   while (j <= i) {
    if (nums[j] != val) {
      j++;
    }
    else { //(nums[j] == val) {
      nums[j] = nums[i];
      i--;  // reduce nums[] size by 1
    }
    console.log("nums:", nums, "i:", i);
  }
  return ++i;
}

let nums = [3,2,2,3];     let val = 3;
let nums = [4,1,2,3,5];   let val = 4;
console.log(removeElement(nums, val));

