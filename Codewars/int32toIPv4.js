/*
int32 to IPv4

Task:
  Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

*/

function int32ToIp(int32) {
  // >>>: Zero-fill right shift
  return ((int32 >>> 24) & 0xFF) + '.' +
         ((int32 >>> 16) & 0xFF) + '.' +
         ((int32 >>>  8) & 0xFF) + '.' +
         (int32        & 0xFF);
}


let re;
re = int32ToIp(5);            // "0.0.0.5"
console.log(re);

//re = int32ToIp(2149583361);   
// 1000 0000 0010 0000 0000 1010 0000 0001 => "128.32.10.1"

//re = int32ToIp(2154959208);   // "128.114.17.104"
//re = int32ToIp(2149583361);   // "128.32.10.1"

