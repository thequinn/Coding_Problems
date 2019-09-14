const sequenceSum = (begin, end, step) => {
  if (begin > end)    return 0;
  
  return begin + sequenceSum(begin + step, end, step);
};


let re;
re = sequenceSum(2, 6, 2); // 12
//re = sequenceSum(1, 5, 1); // 15
//re = sequenceSum(1, 5, 3); // 5
console.log("re: ", re);
