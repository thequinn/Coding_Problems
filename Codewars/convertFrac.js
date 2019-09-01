// Common Denominators 

/*
最大公約數（Greatest Common Divisor，簡寫為GCD）
- 是幾個自然數公有約數中最大的一個。
- 例如，16和40公約數有：1、2、4、8，其中最大的是8，8就是16和40的最大公約數。

最小公倍數（英語：Least Common Multiple，簡寫為LCM）
- 是幾個自然數公有倍數中最小一個。
- 例如，5和6公倍數有：30、60、90、⋯⋯其中最小的是30，30就是5和6的最小公倍數。

如何找最大公约数, 最小公倍數:
- https://www.idomaths.com/zh-Hant/hcflcm.php#findhcf
*/

// 求最大公約數: 輾轉相除法（歐幾里德算法）
const gcd = (a, b) => b ? gcd(b, a % b) : a;
// 求最小公倍數: 公式法
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce( (a, [_, d]) => lcm(d, a), 1 );
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}
