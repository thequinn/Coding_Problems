const isAnagram = (test, original) => {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');

  return t == o ? true : false;
};

let re;
re = isAnagram("foefet", "toffee");          // T
console.log(re);
re = isAnagram("Buckethead", "DeathCubeK");  // T
console.log(re);
re = isAnagram("Twoo", "WooT");              // T
console.log(re);
re = isAnagram("dumble", "bumble");          // F
console.log(re);
re = isAnagram("ound", "round");             // F
console.log(re);
re = isAnagram("apple", "pale");             // F
console.log(re);

