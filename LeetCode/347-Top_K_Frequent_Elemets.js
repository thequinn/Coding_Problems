/*
347. Top K Frequent Elements

Solution Code:
- https://leetcode.com/problems/top-k-frequent-elements/discuss/394465/Clean-JavaScript-solution

*/

var topKFrequent = function(nums, k) {
  const hash = {};

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i];
    hash[num] ? hash[num] += 1 : hash[num] = 1;
  }

  // ln-50~53 is same as ln-56~73
  return Object
    .keys(hash)
    .sort((a, b) => hash[a] <= hash[b] ? 1 : -1)
    .splice(0, k);

  /*
  // Object.keys():
  // - returns an array of a given object's own enumerable property names,
  //   iterated in the same order that a normal loop would.
  let arr_keys = Object.keys(hash);
  console.log(arr_keys);

  // hash[a] <= hash[b] ? 1 : -1 ==> Sort in ascending order
  // hash[a] >= hash[b] ? 1 : -1 ==> Sort in descending order
  let arr_sorted = arr_keys.sort((a, b) => hash[a] <= hash[b] ? 1 : -1);
  console.log(arr_sorted);

  // splice():
  // - changes the contents of an array by removing or replacing existing
  //   elements and/or adding new elements in place.
  let res = arr_sorted.splice(0, k); // Remove elem at index k
  console.log(res);

  return res;
  */
};

//---------- Testing ----------
let nums = [1,1,1,2,2,3], k = 2;  // output: [1,2]
let res = topKFrequent(nums, 2);
console.log("\nres:", res)
