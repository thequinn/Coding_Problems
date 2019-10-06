
var reverseString = function(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    s[j] = [s[i], s[i]=s[j]][0];
  }
  return s;
};


let s = ["h","e","l","l","o"];
console.log(reverseString(s));
