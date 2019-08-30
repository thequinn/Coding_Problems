function queueTime(customers, n) {
  var total = 0;

  if (customers.length <= 0 )
    return 0;
  if (n === 1) {
    customers.forEach(curr => { total += curr  });
    return total;
  }

  var arr = [];
  var len = customers.length;
  // dequeue n customers
  for (let i = 0; i < n && i < len; i++) {
    arr[i] = customers.shift();
  }
  
  // find max time a customer needs
  var max = arr.reduce((a,b) => {
    return Math.max(a, b);
  });
  // find min time a customer needs
  var min = arr.reduce((a,b) => {
    return Math.min(a, b);
  });
  console.log("max:", max, ", min:", min);

  // x = max - min, replace max by x
  var x = max - min;
  var indexOfMax = 0;
  var i = arr.find((currVal, i) => { 
    if (currVal === max) {
      indexOfMax = i;
      return currVal; 
    } 
  });  
  console.log("i: ", i);
  arr[i] = x;
  // save min to total
  total += min;
  // dequeue next customer to replace the min
  
}

var re = 0;
//re = queueTime([], 1)
//re = queueTime([1,2,3,4], 1)

re = queueTime([2,2,3,3,4,4], 2)
console.log("re: ", re);

//re = queueTime([1,2,3,4,5], 100)
//console.log("re: ", re);

