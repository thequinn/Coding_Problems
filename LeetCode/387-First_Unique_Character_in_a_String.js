/*
387. First Unique Character in a String
*/

var firstUniqChar = function(s){
  var map=new Map();
  
  for(let i = 0; i < s.length; i++){
    console.log("i:", i);
    if(map.has(s[i]))   map.set(s[i], 2);
    else                map.set(s[i], 1);
  }

  for(let i = 0; i < s.length; i++){
    if(map.has(s[i]) && map.get(s[i]) === 1){
      return i;
    }
  }
  return -1;
};

let s = "leetcode";
//let s = "loveleetcode";
console.log(firstUniqChar(s));
