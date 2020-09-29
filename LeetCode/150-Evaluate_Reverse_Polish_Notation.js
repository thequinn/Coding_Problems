function evalRPN(tokens) {
  const ops = {
    '+': (a,b) => a+b,
    '-': (a,b) => a-b,
    '*': (a,b) => a*b,
    '/': (a,b) => ~~(a/b)
  };

  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    let n = tokens[i];

    if (ops[n] != null) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push( ops[n] (a,b) );
    }
    else {
      stack.push(Number(n));
    }
  }

  return stack[0];
}
