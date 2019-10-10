/*
350. Intersection of Two Arrays II
*/


var intersect = function(nums1, nums2) {
  let p1 = 0, p2 = 0;
  let res = [];

  nums1.sort(cm);
  nums2.sort(cm);

  while(p1 < nums1.length && p2 < nums2.length) {
    if(nums1[p1] == nums2[p2]) {
      res.push(nums1[p1]);
      p1++;   p2++;
    } else if(nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }
  return res;
};

//let nums1 = [1,2,2,1], nums2 = [2,2]; // [2,2]
let nums1 = [4,9,5], nums2 = [9,4,9,9,8,4]; // [4,9]
//let nums1 = [2,4,9,5], nums2 = [9,5,7,4,9,8,4];
console.log(intersect(nums1, nums2));
