function validParentheses(string){
  var tokenizer = /[()]/g, count = 0, token;

  while (token = tokenizer.exec(string), token !== null){
    if (token == "(") {
      count++;
    } 
    else if (token == ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count == 0; 
}

let re = null, parens = "";
parens = "()";              // true
//parens = ")(()))";          // false
//parens = "(";               // false
//parens = "(())((()())())";  // true

re = validParentheses(parens);
console.log("re: ", re);
