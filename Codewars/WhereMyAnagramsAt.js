String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}

let re;

re = anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']); 
// ['carer', 'racer']

//re = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);  
// ['aabb', 'bbaa']

//re = anagrams('laser', ['lazing', 'lazy',  'lacer']);    // []

console.log(re);
