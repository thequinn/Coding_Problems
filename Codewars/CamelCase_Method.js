String.prototype.camelCase = function(){
  return this.split(" ").map(a => a.charAt(0).toUpperCase() + a.slice(1)).join("")
};

let re = '';
re = "test case".camelCase();
//re = "camel case method".camelCase();
//re = "say hello ".camelCase();
//re = " camel case word".camelCase();
//re = "".camelCase();
console.log("re:", re);
