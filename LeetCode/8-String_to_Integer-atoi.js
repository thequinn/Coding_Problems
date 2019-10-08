/*
8. String to Integer (atoi)
*/

var myAtoi = function(str) {
    let i = 0;
    let res = 0;
    let isNegative = false;
    
    str = str.trim();  
    const maybeSign = str[i];
    if (maybeSign === '+' || maybeSign === '-') {
        isNegative = maybeSign === '-';
        i += 1;
    }

    for (; i < str.length; i += 1) {
      const code = str.charCodeAt(i) - 48; 
      if (code < 0 || code > 9)   break;

      res *= 10;
      res += code;
    }
    
    if (isNegative)   res = -res;
    
    return Math.max(-(2**31), Math.min(2**31 - 1, res));
};

let s;
//s = "42";  // 42
s = "   -42";  // -42
//s = "4193 with words";  //4139
//s = "words and 987";  // 0

//s = "-91283472332";  //Output: -2147483648
// The number "-91283472332" is out of the range of a 32-bit signed integer.
// Thefore INT_MIN(−2^31) is returned.

console.log(myAtoi(s));
