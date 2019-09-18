function rgb(r, g, b){
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if(d < 0 ) {return "00";}
  if(d > 255 ) {return "FF";}
  
  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase();
 }


let re;
//re = rgb(300, 0, -20);      // 'FF0000'
//re = rgb(173,255,47);       // 'ADFF2F'
//re = rgb(148, 0, 211)       // '9400D3'
re = rgb(153,160,10)        // '99A00A'
console.log("re:", re);
