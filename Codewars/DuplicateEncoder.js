function duplicateEncode(word) {
  var letters = word.toLowerCase().split('');

  return letters.map(function(c, i) {
    return letters.some(function(x, j) { 
      return x === c && i !== j }) ? ')' : '('
  }).join('')
}

let re = "";
//re = duplicateEncode("din");         // "((("
//re = duplicateEncode("recede");      // "()()()"
//re = duplicateEncode("Success");     // ")())())"
re = duplicateEncode("(( @");        // "))(("

console.log("re: ", re);

