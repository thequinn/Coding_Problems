/*
88. Merge Sorted Arraya
*/

var merge = function (nums1, m, nums2, n) {
  // Trace the index of nums[] for sorted position backwards
  let len = nums1.length - 1;

  m--;  n--;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[len--] = nums1[m--];
    } 
    else {
      nums1[len--] = nums2[n--];
    }
  }

  return nums1;
};

let nums1 = [1,2,3,0,0,0], m = 3;
let nums2 = [2,5,6],       n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // [1,2,2,3,5,6]

