/*
283. Move Zeroes
*/

var moveZeroes = function(nums) {
  let ans = [];
  let numZeros = 0;

  nums.foreach(num => {
    numZeros++;
    if (num != 0)   ans.push(num);
  });

  while (numZeros--) {
    ans.push(0);
  }

  return nums.map((num, i) => num = ans[i]);
};

let nums = [0,1,0,3,12]; // [1,3,12,0,0]
console.log(moveZeroes(nums));
