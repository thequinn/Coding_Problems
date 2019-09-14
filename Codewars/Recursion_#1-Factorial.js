const factorial = n => n > 1 ? n*factorial(n-1) : 1;


let n = 5, re = 0;
re = factorial(n);
console.log(re);
