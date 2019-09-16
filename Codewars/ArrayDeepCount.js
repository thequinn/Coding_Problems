function deepCount(arr) {
  let sum = 0;
  return helper(sum, arr);
}
function helper(sum, arr) {
  if (arr.length === 0)   return 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += deepCount(arr[i]);
    }
    sum++;
  }
  return sum;
}


let re;
//re = deepCount([]);                    // 0
//re = deepCount([1, 2, 3]);             // 3
re = deepCount(["x", "y", ["z"]]);       // 4
//re = deepCount([1, 2, [3, 4, [5]]]);   // 7
//re = deepCount([[[[[[[[[]]]]]]]]]);    // 8
console.log("re: ", re);
