/*
Reference:
  https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
*/

/*
Note:
- You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
 */

// Approach #1: Using regex
// - Remove non-alphanumeric chars, and then to lower-case.  Next, compare the
// string in reverse order
var validPalindrome_1 = function(s) {

  // myRegex: a RegExp obj that looks for char(s) not alphanumeric
  // g flag: make it a global operation that repeatly match the regex
  var myRegex = /[^A-Za-z0-9]/g;

  var s2 = s.replace(myRegex, '').toLowerCase();
  var s3 = s2.split('').reverse().join('');

  return s2 === s3;
}

// Approach #2: For loop and half-indexing (len/2)
var validPalindrome_2 = function(s) {
  var myRegex = /[^A-Za-z0-9]/g;
  s = s.toLowerCase().replace(myRegex, '');

  // Compare from left-end and right-end towards the middle
  for (var i = 0; i < (s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;

}

s0 = "";
var s1 = "Anana";
var s2 = "race car"
var s3 = "A nn, , , : ,a";
var s4 = "A man, a plan, a canal: Panama";
var result = validPalindrome_2(s4);
console.log(result);
