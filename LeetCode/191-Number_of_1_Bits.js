/*
191. Number of 1 Bits

*/

var hammingWeight = function(n) {
  let sum = 0;

  while (n != 0) {
    sum++;
    n &= (n - 1);
  }
  return sum;
}


