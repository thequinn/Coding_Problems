
// returns 0 when the reversed integer overflows.
var checkRange = function(x) {
    var range = 2 ** 31;  // same as:  Math.pow(2, 31)
    //console.log("range: ", range);
    if (x < (-1 * range) || x > (range - 1)) {
        return 0;
    }
};

// Method #1:
var reverse1 = function(x) {
    // Convert int to arr
    var str = x.toString();

    /*
    String.split(): 
    - Split a str into an arr of strs, using a specified sperator str
    - If separator is omitted or does not occur in str, the array returned 
      contains one element consisting of the entire string.
    - If separator is an
      empty string, str is converted to an array having one element for each 
      character of str.
    */
    var arr = str.split("");

    var revArr = arr.reverse();

    /* 
    Array.join(): 
    - returns a str w/ all array elem's joined
    - If separator is omitted, the array elements are separated w/ a comma (",").
    - If separator is an empty string (""), all elements are joined without any 
      characters in between them.
    */
    str = revArr.join("");
    
    if (x < 0) {
	str = "-" + str;
	str = str.slice(0, str.length-1);
    }

    var res = parseInt(str, 10);

    if (checkRange(res) == 0) {
	return 0;
    }
    return res;
};

// Method #2: Math method
var reverse2 = function(x) {
    let reverse = 0;
    let negative = false;

    if (x < 0) {
	negative = true;
	x = Math.abs(x);
    }
    
    // While "floor of division of x" is not 0
    while (x != 0) {
	reverse = reverse * 10 + x % 10;
	x = Math.floor(x/10);
    }
    
    (negative) ? reverse *= -1: reverse ;
    
    // returns 0 when the reversed integer overflows.
    if (checkRange(reverse) == 0) {
    	return 0;
    }
    return reverse;
    
}


var input = 1534236469
//var input = 123;
//var input = -123;

//var res = reverse1(input);
var res = reverse2(input);
console.log("res: ", res);
