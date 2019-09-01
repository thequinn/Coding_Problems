// Method #1: OK
function towerBuilder(nFloors) {
  const floorW = nFloors * 2 -1;
  let floor = '', s1, s2;
  let re = [];
  
  for (let i = 1, starW = 1; i <= nFloors; i++, starW += 2) {
    s1 = '*'.repeat(starW);
    // Spaces each floor fills = floorW - starW
    s2 = ' '.repeat((floorW - starW) / 2)
    
    re.push(floor + s2 + s1 + s2);
    //console.log("re[i]:", re[i - 1]);
    s1 = s2 = floor = '';
  }
  return re;
} 

// Method #2: Clever
function towerBuilder(nFloors) {
  return Array.from({length: nFloors}, (v, k) => {
    const spaces = ' '.repeat(nFloors - k - 1);
    const stars = '*'.repeat(k + k + 1);
    return spaces + stars + spaces;

  });
}

let re;
re = towerBuilder(3);
console.log("re:\n", re);


