
/*
334. Increasing Triplet Subsequence

*/

var increasingTriplet = function(nums) {
  let first_num = Infinity;
  let second_num = Infinity;

  for (const n of nums) {
    if (n <= first_num)
      first_num = n;
    else if (n <= second_num)
      second_num = n;
    else
      return true;
  }
  return false;
};


let nums = [1,2,3,4,5];
console.log(increasingTriplet(nums));

