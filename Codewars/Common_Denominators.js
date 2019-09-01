// Common Denominators 

// 求最大公約數: 輾轉相除法（歐幾里德算法）
let gcd = function(a, b) {
  if(!b) { return a; }
  return gcd(b, a % b);
}
// 求最小公倍數: 公式法
let lcm = function(d1, d2) {
  return d1 * d2 / gcd(d1, d2);
}

let convertFrac = function(arr) {
  let cd = arr.reduce((a, b) => lcm(b[1], a), 1);
  // Convert from arr to str.
  return arr.map(a => `(${a[0]*(cd/a[1])},${a[1] * (cd/a[1])})`).join('');
}

var lst = [ [1, 2], [1, 3], [1, 4] ];
var re = convertFrac(lst); // (6,12)(4,12)(3,12)
console.log("re: ", re);
