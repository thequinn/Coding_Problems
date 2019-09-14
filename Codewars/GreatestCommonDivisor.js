function mygcd(x, y){
  if (y == 0)   return x
  return mygcd(y, x % y)
}

mygcd(30,12);   // 6
mygcd(8,9);     // 1
mygcd(1,1);     // 1
