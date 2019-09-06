function multiplicationTable(row,col){
  let subArr = [], arr = [];

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      subArr.push(i * j);      
    }
    arr.push(subArr);
    subArr = [];
  }
  return arr;
}

let re = [];
re = multiplicationTable(2,2); // [[1,2],[2,4]]
console.log(re);
//re = multiplicationTable(3,3); // [[1,2,3],[2,4,6],[3,6,9]]
//re = multiplicationTable(3,4); // [[1,2,3,4],[2,4,6,8],[3,6,9,12]]
//re = multiplicationTable(4,4); // [[1,2,3,4],[2,4,6,8],[3,6,9,12][4,8,12,16]]
//re = multiplicationTable(2,5); // [[1,2,3,4,5],[2,4,6,8,10]]
