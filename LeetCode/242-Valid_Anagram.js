/*
242. Valid Anagram  => Anagram: 由調換字母順序而成的字
*/

var isAnagram = function(s, t) {
  if (s.length !== t.length)    return false;
  
  const map = {};
  s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
  t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
  
  let keyArr = Object.keys(map);
  return keyArr.every(k => map[k] === 0);
}

let s = "anagram", t = "nagaram";   // T
//let s = "rat", t = "car";           // F
console.log(isAnagram(s, t));
