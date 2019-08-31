/*
思考拆解：

The Supermarket Queue 減法思考 vs 加法思考
- 用加法思考。把下一個等待中的顧客，加到目前數值最小的結帳口，直到 queue 都沒有顧客。最後，數值最大的結帳口就是總時間。
*/

function queueTime(customers, n) {
  var tills = new Array(n).fill(0);
  for (let t of customers) {
    let idx = tills.indexOf(Math.min(...tills));
    // 加到目前數值最小的結帳口
    tills[idx] += t;
  }
  return Math.max(...tills);
}

var re = 0;
// Longer test: [9,32,38,15,49,10,47,4,49,20,23,20,9,17,13,25]
//re = queueTime([9,32,38], 3);       //38
re = queueTime([9,32,38,15], 3);      //38
console.log("re: ", re);

//re = queueTime([], 1)
//re = queueTime([1,2,3,4], 1)
//re = queueTime([2,2,3,3,4,4], 2)
//re = queueTime([1,2,3,4,5], 100)

