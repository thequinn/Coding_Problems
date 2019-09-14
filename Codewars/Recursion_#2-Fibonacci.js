var cache = { 1 : 1, 2 : 1}
const fibonacci = n => cache[n] || (cache[n] = fibonacci(n - 1) + fibonacci(n - 2))


let re = -1;
re = fibonacci(1);  // 1
console.log(re);
re = fibonacci(2);  // 1
console.log(re);
re = fibonacci(3);  // 2
console.log(re);
re = fibonacci(4);  // 3
console.log(re);
