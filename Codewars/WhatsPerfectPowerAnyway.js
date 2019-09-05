
function isPP(n) {

  for (var m = 2; m * m <= n; ++ m)
  
    // Math.pow(base, exp) = base^exp
    for (var k = 2; Math.pow(m, k) <= n; ++ k)

      if (Math.pow(m, k) == n) 
        return [m, k];

  return null;
}

re = isPP(243)
console.log(re)

//re = isPP(81) 
// [3,4].  Although [3,4] and [9,2] are both correct, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

//re = isPP(9) # [3,2]
//re = isPP(5) # None

