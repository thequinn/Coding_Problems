/*
7. Reverse Integer
*/

var reverse = function(x) {
  const THRESHOLD =  Math.pow(2, 31);
  let rev = 0;
  let y = Math.abs(x);

  while (y != 0) {
    let pop = y % 10;
    y = x / 10 | 0;   
    rev = rev * 10 + pop;
  }

  if ((rev < THRESHOLD * -1) || (rev > THRESHOLD - 1)) {
    return 0;
  }
  return x < 0 ? rev * -1 : rev;
}


//let x = 120;              // 21
//console.log(reverse(x));
let x1 = 123;               // 321
console.log(reverse(x1));
let x2 = -123;              // -321
console.log(reverse(x2));
