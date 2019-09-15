function replicate_1(times, num) {
  let re = [];
  return helper(re, times, num);
}

function helper(re, times, num) {
  if (times < 1)    return re;
  re.push(num);    
  return helper(re, times - 1, num)
}

let re_1 = replicate_1(3, 5);
console.log(re_1)


