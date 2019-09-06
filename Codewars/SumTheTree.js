function sumTheTreeValues(root) {
  if(!root) return 0;
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}


let re = null;

// undefined: var is declared, but no val is assigned
var emptyNode;  
re = sumTheTreeValues(emptyNode);
console.log("re: ", re);

// empty: var is declared and val is assigned.  But the Obj's has no val.
var emptyNode2 = {};  
re = sumTheTreeValues(emptyNode2);
console.log("re: ", re);


// Sums up all children
var simpleNode = { 
  value: 10, 
  left: {value: 1, left: null, right: null}, 
  right: {value: 2, left: null, right: null}
};
re = sumTheTreeValues(simpleNode); // 13
console.log("re:", re)
  
