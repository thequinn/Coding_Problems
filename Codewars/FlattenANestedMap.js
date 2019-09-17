function flattenMap(map) {
  var result = {};

  function recurse (cur, prop) {
    console.log("Object(cur):", Object(cur));
    console.log("cur        :", cur);
    if (Object(cur) !== cur || Array.isArray(cur)) {
      return result[prop] = cur;
    }
    for (var p in cur) {
      recurse(cur[p], prop ? prop+"/"+p : p);
    }
  }
  recurse(map, "");
  return result;
}

var input = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
};
/*
Output: 
{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
};
*/
console.log( flattenMap(input) );
