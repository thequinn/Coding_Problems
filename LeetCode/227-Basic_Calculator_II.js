/*
227. Basic Calculator II
*/

function calculate(s) {
  if (s == null || s.length === 0) return null;

  s = s.replace(/\s/g, '');

  let stack = [];
  let n = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (/\d/.test(c)) {
      n = n * 10 + Number(c);  // e.g. '14' -> 1 * 10 + 4
    }

    if (/\D/.test(c) || i === s.length - 1) {
      if (sign === '-')      stack.push(-n);
      else if (sign === '+') stack.push(n);
      else if (sign === '*') stack.push(stack.pop() * n);
      else if (sign === '/') stack.push(~~(stack.pop() / n));

      sign = c;
      n = 0;
    }
  }

  return stack.reduce((a, b) => a + b);
}

//-----Test Case-----
let s1 = "3  -2*2";  // 7
let s2 = " 3/2 ";  // 1
let s3 = " 3+5 / 2 ";  // 5

console.log(calculate(s1));
