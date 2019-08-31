/*function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    console.log('t:', t);
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}*/

const isZero = (elem, idx, arr)  => { 
  //console.log("elem:", elem, ", idx:", idx);
  return elem === 0;
}

function queueTime(customers, n) {
  let arr, cus, idx, total = 0;
  let relay = false;

  if (customers.length === 0) {
    return 0;
  }
  
  if (customers.length >= n) {
    arr = new Array(n).fill(0);
  } else {
    arr = new Array(customers.length).fill(0);
    relay = true;
  }
  
  while (customers.length > 0 || relay) {
    while ( (idx = arr.findIndex(isZero)) !== -1 ) {
      if ( (cus = customers.shift()) !== undefined ) {
        arr[idx] = cus;
        //console.log("arr[", idx, "]:", arr[idx]);
      } else {
        let max = Math.max(...arr);
        //console.log("max:", max);
        total += max;
        //console.log("total+=max:", total);
        return total;
      }
    }
     
    let min = Math.min(...arr);
    arr.forEach((currVal, i) => {
      arr[i] = currVal - min;
    });
    total += min;
    //console.log("total+=min:", total);
  }
  return total;
}

var re = 0;
//re = queueTime([], 1)
//console.log("re: ", re);
//re = queueTime([1,2,3,4], 1)
//console.log("re: ", re);
//re = queueTime([2,2,3,3,4,4], 2)
//console.log("re: ", re);
re = queueTime([1,2,3,4,5], 100)
console.log("re: ", re);

