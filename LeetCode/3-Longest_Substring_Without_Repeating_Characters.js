/*
3. Longest Substring Without Repeating Characters
*/

var lengthOfLongestSubstring = (str) => {
  let ans = 0, res = 0;

  for (let i = 0; i < str.length; i++) {
    let set = new Set();
    set.add(str[i]);
    ans = 1;

    for (let j = i + 1; j < str.length; j++) {
      if (!set.has(str[j])) {
        set.add(str[j]);
        ans++;
      }
      else    break;
    }
    res = Math.max(ans, res);
  }
  return res;
};


//let str = "abcabcbb";   // 3
let str = "abcbb";   // 3
//let str = "bbbbb";    // 1
//let str = "pwwkew";   // 3

let res = lengthOfLongestSubstring(str);
console.log(res);

