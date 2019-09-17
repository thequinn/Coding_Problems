/*
Number of anagrams in an array of words
*/

function anagramCounter(arrayOfWords){
  let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex)=>{
    for(let i = theIndex+1; i < sortedWords.length; i++){
      if(word === sortedWords[i]){
        numberOfAnagrams++;
      }
    }
  })
  return numberOfAnagrams;
}

let re;
re = anagramCounter(['dell', 'ledl', 'abc', 'cba']);  // 2
//re = anagramCounter(['dell', 'ledl', 'lled', 'cba']); // 3
//re = anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']);   11
console.log(re);
