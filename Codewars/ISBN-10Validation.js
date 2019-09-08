/*
 
For an ISBN-10 to be valid, the sum of the digits multiplied by their position has to equal zero modulo 11.

ex. ISBN-10: 1112223339 is valid b/c 
    (((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
*/


let validISBN10 = isbn => {
  if (!/[0-9]{9}[0-9X]/.test(isbn))   return false; 

  return isbn.split('').reduce((acc, val, idx) => acc + (val === 'X' ? 10 : val) * ++idx, 0) % 11 === 0;
};


let re;
re = validISBN10('1112223339'); // true
re = validISBN10('111222333X'); // false
re = validISBN10('1X12223339'); // false 
console.log("re: ", re);

//re = validISBN10('12345'); // true
//re = validISBN10('123456789A'); // false
