/*
Kebabize

Task:
- Modify the kebabize function so that it converts a camel case string into a kebab case.

- Note:
The returned string should only contain lowercase letters
*/

function kebabize(str) {  
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase()  
}


let re = '';
//re = kebabize('camelsHaveThreeHumps');  // camels-have-three-humps
re = kebabize('EricHas999Books222');      // eric-has-books
console.log("re: ", re);
