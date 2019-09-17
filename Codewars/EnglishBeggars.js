const beggars = (v, n, i=0, res=[...Array(n)].map(e => 0)) => {
  let tmp = v.length
    ? beggars(v.slice(1), n, (i+1)%n, res.map((e,j) => {
        let newVal = j==i ? e+v[0] : e;
        return newVal;
      })
    )
    : res
  
  return tmp;
};


let re;
re = beggars([1,2,3,4,5],2);  // [9,6]
//re = beggars([1,2,3,4,5],3);  // [5,7,3]
//re = beggars([1,2,3,4,5],6);  // [1,2,3,4,5,0]
//re = beggars([1,2,3,4,5],0);  // []
console.log("re: ", re);
