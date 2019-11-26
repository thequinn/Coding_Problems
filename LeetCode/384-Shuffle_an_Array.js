/*
384. Shuffle an Array
*/

var Solution = function(nums) {
  this.nums = nums || [];
};

Solution.prototype.reset = function() {
  return this.nums;
};

Solution.prototype.shuffle = function() {
  const a = this.nums.slice();

  for (let i = 0; i < a.length; i++) {
    let rand = Math.floor(Math.random() * (a.length - i)) + i;
    [ a[i], a[rand] ] = [ a[rand], a[i] ];
  }

  return a;
};

//let nums = ["Solution","shuffle","reset","shuffle"]
let nums = [[[1,2,3]],[],[],[]]
var obj = new Solution(nums)

var param_2 = obj.shuffle()
console.log("param_2:", param_2);

var param_1 = obj.reset()
console.log("param_1:", param_1);
