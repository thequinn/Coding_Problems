/*
974. Subarray Sums Divisible by K
*/

var subarraysDivByK = function(A, K) {
  A.unshift(0);
  return A
    .map((sum => value => sum += value)(0))
    .reduce((a, c) => {
      a[(c % K + K) % K]++;
      return a;
    }, new Array(K).fill(0))
    .reduce((a,c) => {
      a += (c * (c-1) / 2) >> 0;
      return a;
    }, 0);
};
