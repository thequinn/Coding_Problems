function pigIt(str) {
  return str.split(' ').map(v=>v.match(/[A-Za-z]/)?v.slice(1)+v.slice(0,1)+'ay':v).join(' ')
}

let re = "";
//re = pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//re = pigIt('Hello world !');     // elloHay orldway !
re = pigIt("Quis custodiet ipsos custodes ?"); // uisQay ustodietcay psosiay ustodescay ?
console.log("re: ", re);



