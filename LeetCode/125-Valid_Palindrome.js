/*
125. Valid Palindrome  ==> Palindrome: 回文(顺读和倒读都一样的字串)
*/

var isPalindrome = function(s) {
  s = s.replace(/\W+/g, "").toLowerCase();
  return s === s.split("").reverse().join("");
};

let s = "A man, a plan, a canal: Panama";  // T
//let s = "race a car";  // F
console.log(isPalindrome(s));
