

/*
Follow up:
- What if the inputs contain unicode characters? How would you adapt your solution to such case?

Answer:
- (Approach #3) Use a hash table instead of a fixed size counter. Imagine allocating a large size array to fit the entire range of unicode characters, which could go up to more than 1 million. A hash table is a more generic solution and could adapt to any range of characters.
*/

// Approach #1: Sorting
// -- Time Complexity: Depending on the sorting algorithms implemented by the
//    browser
// -- Space complexity : O(1). Space depends on the sorting implementation
//    which, usually, costs O(1)O(1) auxiliary space if heapsort is used.
// -- Note: in Java, toCharArray() makes a copy of the string so it costs O(n)
//    extra space, but we ignore this for complexity analysis because:
//     - It is a language dependent detail.
//     - It depends on how the function is designed. For example, the function
//       parameter types can be changed to char[].
var isAnagram_1 = function(s, t) {
  if (s.length !== t.length)  return false;

  // Convert from string to array to use Array.sort()
  var arr_s = s.split('').sort();
  var arr_t = t.split('').sort();

  for (var i = 0; i < s.length; i++) {
    if (arr_s[i] !== arr_t[i]) {
      return false;
    }
  }
  return true;
}

// Approach #2: Hash Tbl
var isAnagram_2 = function(s, t) {
  var hashTbl = {};

  if (s.length !== t.length)  return false;

  // Add chars of s and numbers of times each char shows up to hashTbl
  for (var  i = 0; i < s.length; i++) {
    if (!hashTbl.hasOwnProperty( s.charAt(i) )) {
      hashTbl[ s.charAt(i) ] = 1;
    }
    else{
      hashTbl[ s.charAt(i) ] += 1;
    }
  }

  // Check if t is an anagram of s
  for (var i = 0; i < t.length; i++) {
    if (!hashTbl[ t.charAt(i) ] || (hashTbl[ t.charAt(i) ] === 0)) {
      return false;
    }
    hashTbl[ t.charAt(i) ] -= 1;
  }
  return true;
};


// Approach #3: Array
// -- Time Complexity: O(n) b/c accessing the counter table is a constant time
//    operation.
// -- Space Complexity: O(1). Although we do use extra space, the table's size stays constant no matter how large n is.

var isAnagram_3 = function(s, t) {

  // - Create an array and fill all positions w/ 0's
  // - We have to do it b/c JS doesn't automatically initialize 0's for us
  var counter = Array(26).fill(0);

  if (s.length != t.length)   return false;

  // Add chars of s and numbers of times each char shows up to arr
  for (var i = 0; i < s.length; i++) {
    // - JS doesn't treat chars as numbers
    //counter[s.charAt(i) - 'a']++;       // WRONG!!
    //
    // - retrieve the ASCII character code from 0th element of the string
    var index_s = s.charCodeAt(i) - 'a'.charCodeAt(0);
    counter[index_s]++;

    var index_t = t.charCodeAt(i) - 'a'.charCodeAt(0);
    counter[index_t]--;
  }

  for (var i = 0; i < counter.length; i++) {
    if (counter[i] != 0) {
      return false;
    }
  }
  return true;
}

var s0 = "carr", t0 = "racr"; // T
var s1 = "abc", t1 = "cba";   // T
var s2 = "anagram", t2 = "aaangrm"  // T
var s3 = "anagram", t3 = "nangram"; // F
var result = isAnagram_1(s0, t0);
console.log(result);

