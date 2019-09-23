/*
思路：

括号匹配问题用stack解再合适不过。括号组合是否有效，主要看右括号。右括号的数量必须要等于相应的左括号。而左右括号之间也必须是有效的括号组合。

1. 当前括号是左括号时，压入stack。
2. 当前括号是右括号时，stack.top()如果不是对应的左括号，则为无效组合。否则，pop掉stack里的左括号。
3. 所有字符都判断处理过后，stack应为空，否则则无效。
*/

var isValid = function(s) {
    var stack = [];

    if (s.length % 2 === 1)     return false;

    for (var i = 0; i < s.length; i++) {
        if ( isOpen(s.substr(i, 1)) ) {
            stack.push(s.substr(i, 1));
        }
        else {
            if ((stack.length === 0)) {
                return false;
            }
            if ( ! isClose(stack.pop(), s.substr(i, 1)) ) {
                return false;
            }
        }
    }
    if (stack.length > 0)   return false;
    return true;
}

var isOpen = function(a) {
    return (a=='(' || a=='{' || a=='[');
}

var isClose = function(a, b) {
    if(a === '(')      return b === ')';
    if(a === '[')      return b === ']';
    if(a === '{')      return b === '}';
    return false;
}


//var input = "((";
//var input = "([{}])";
var input = "()[]{}";
//var input = "([)]";
console.log(isValid(input));
