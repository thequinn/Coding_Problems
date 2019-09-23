/*
- Roman numerals are represented by seven different symbols:
-- I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


- Roman numeral rules: 6 instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.

==> So cases like IIV, XXL, CCD are not right forms of Roman numerals.
*/

var tbl = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

// Approach #1: Using Hash/Map and process the str forward
var romanToInt_1 = function() {
  var sum = 0;
  for (var i = 0; i < s.length; i++) {
    var currCh = s.charAt(i);
    var nextCh = s.charAt(i + 1);
    //console.log("currCh:", currCh, "\tnextCh:", nextCh);

    if ( tbl[currCh] < tbl[nextCh]) {
      sum -= tbl[currCh];
      //console.log("ln23 - sum:", sum);
    }
    else {
      sum += tbl[currCh];
      //console.log("ln27 - sum:", sum);
    }
  }
  return sum;
}

// Approach #2: Using Hash/Map and process the str backward
var romanToInt_2 = function(s) {
  var sum = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    var currCh = s.charAt(i);
    var nextCh = s.charAt(i + 1);
    if ( tbl[currCh] < tbl[nextCh]) {
      sum -= tbl[currCh];
    }
    else {
      sum += tbl[currCh];
    }
  }
  return sum;
};

// Approach #3:
// - count every Symbol and add its value to the sum, and minus the extra part
//   of special cases.
var romanToInt_3 = function(s) {
    var sum=0;
    var arr = s.split('');

    if(s.indexOf("IV")!=-1){sum-=2;}
    if(s.indexOf("IX")!=-1){sum-=2;}
    if(s.indexOf("XL")!=-1){sum-=20;}
    if(s.indexOf("XC")!=-1){sum-=20;}
    if(s.indexOf("CD")!=-1){sum-=200;}
    if(s.indexOf("CM")!=-1){sum-=200;}

    for(var count = 0; count < s.length; count++){
       if(arr[count]=='M') sum+=1000;
       if(arr[count]=='D') sum+=500;
       if(arr[count]=='C') sum+=100;
       if(arr[count]=='L') sum+=50;
       if(arr[count]=='X') sum+=10;
       if(arr[count]=='V') sum+=5;
       if(arr[count]=='I') sum+=1;
    }
    return sum;
}

var s = "XL";
var result = romanToInt_3(s);
console.log(result);
