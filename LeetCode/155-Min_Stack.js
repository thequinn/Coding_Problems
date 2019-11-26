/*
155. Min Stack
*/


var MinStack = function() {
  this.stack = [];
  this.min = [];
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);

  var min = this.getMin();

  if (min !== undefined) {
    this.min.push(Math.min(x, min));
    console.log("ln-24. this.stack:", this.stack, " this.min:", this.min);
  }
  else {
    this.min.push(x);
    console.log("ln-28. this.stack:", this.stack, " this.min:", this.min);
  }
};

MinStack.prototype.pop = function() {
  this.stack.pop();
  this.min.pop();
};

MinStack.prototype.top = function() {
  if (this.stack.length > 0)
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  if (this.min.length > 0)
    return this.min[this.min.length - 1];
};


let arr = [[-2],[0],[-3]]

var obj = new MinStack()

for (let i = 0; i < arr.length; i++) {
  obj.push(arr[i])
}

obj.pop()
console.log("obj:", obj);

var param_3 = obj.top()
console.log("param_3:", param_3);

var param_4 = obj.getMin()
console.log("param_4:", param_4);
