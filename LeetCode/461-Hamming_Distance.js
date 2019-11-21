/*
461. Hamming Distance
*/

var hammingDistance = function(x, y) {
   return (x ^ y).toString().replace(/0/g, '').length;
};

console.log( hammingDistance(3, 1) );

