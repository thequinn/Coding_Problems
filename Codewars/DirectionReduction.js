/*
Directions Reduction

(1) How I crossed the desert the smart way.

The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

A better plan in this case is simply:

["WEST"]


(2) Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
*/

let dirReduc = function(arr) {
  let str = arr.join(' ');
  let re = /NORTH\s+SOUTH|SOUTH\s+NORTH|WEST\s+EAST|EAST\s+WEST/;

  while (re.test(str)){
    str = str.replace(re,'');
  }

  return  str.split(" ").filter(a=>!!a);
}

let re;
re = dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); //["WEST"]
//dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]); //["NORTH", "WEST", "SOUTH", "EAST"]
//dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]); //[]
console.log(re);
