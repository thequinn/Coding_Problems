/*
190. Reverse Bits

Follow up:
- If this function is called many times, how would you optimize it?
*/


var reverseBits = function(n) {
  var ans = 0;

  for (let i = 0; i < 32; i += 1) {

        ans |= n & 1;

    if (i < 31) {
      ans = ans << 1; // << 1: *2;
      n = n >> 1;    // >> 1: /2;
    }
  }

  return ans;
};


let n = 11111111111111111111111111111101;
let ans = reverseBits(n);
console.log("n:", ans.toString(2));
