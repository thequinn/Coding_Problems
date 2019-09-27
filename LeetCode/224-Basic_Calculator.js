var eval_exp = function(stack) {
  let res = 0, sign;

  stack.length > 0 ? res = stack.pop() : 0;

  while (stack.length > 0 && stack[stack.length - 1] != ')') {
    sign = stack.pop();
    if (sign == '+')    res +=stack.pop();
    if (sign == '-')    res -=stack.pop();
  }
  return res;
};

var calculate = function (s) {
  let regex = /[0-9]/;
  let stack = [];
  let n = 0, operand = 0, res;

  for (let i = s.length - 1; i >= 0; i--) {
    let ch = s.charAt(i);
    console.log("\nch: ~", ch, "~");
    
    if (ch.match(regex) !== null) {
      operand += Math.pow(10, n) * parseInt(ch);
      n++;
    }
    else if (ch != ' ') {
      if (n) {
        stack.push(operand);
        n = 0;
        operand = 0;
      }

      if (ch == "(") {
        res = eval_exp(stack);
        stack.pop();
        stack.push(res);
      } else {
        stack.push(ch);
      }

    }
  }
  if (n)    stack.push(operand);

  return eval_exp(stack);
};


let s = "", re = 0;
s = "(1+(4+3)-3)+(6+8)"     // 19
re = calculate(s)
console.log(s, " = " , re)

