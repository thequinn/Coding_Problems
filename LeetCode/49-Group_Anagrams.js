/*
49. Group Anagrams
*/
var groupAnagrams = function(strs) {
  const map = new Map();

  for(const str of strs) {
    const keys = Array(26).fill(0);

    for(const c of str){
      keys[c.charCodeAt(0) - 97] += 1;
    }
    const key = keys.join("#");

    let val = [];
    if (map.has(key)) {
      val = map.get(key)
    }

    val.push(str);
    map.set(key, val);
  }

  return Array.from(map.values());
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let res = groupAnagrams(strs);
console.log(res);
