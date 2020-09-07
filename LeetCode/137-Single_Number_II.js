/*
137. Single Number II

*/

var singleNumber = function(nums) {
  let hash = {};

  for (let n of nums) {
    if (!hash[n])
      hash[n] = 1;
    else {
      hash[n]++;
      if (hash[n] == 3)
        delete hash[n]
    }
  }

  for (const [key, val] of Object.entries(hash)) {
    if (val == 1)  return key;
  }
};


//-----Test Case-----//
let nums = [2,2,3,2];
console.log(singleNumber(nums));
