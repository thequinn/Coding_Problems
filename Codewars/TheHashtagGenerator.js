function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


let re = "";

re = generateHashtag(""); //false
console.log("re:", re);

re = generateHashtag(" ".repeat(200)); // false
console.log("re:", re);

re = generateHashtag("Do We have A Hashtag"); // "#DoWeHaveAHashtag"
console.log("re:", re);

re = generateHashtag("Codewars"); // "#Codewars"
console.log("re:", re);

re = generateHashtag("Codewars Is Nice"); // "#CodewarsIsNice"
console.log("re:", re);

re = generateHashtag("Codewars is nice"); // "#CodewarsIsNice"
console.log("re:", re);

re = generateHashtag("code" + " ".repeat(140) + "wars"); // "#CodeWars"
console.log("re:", re);

re = generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"); // false
console.log("re:", re);

re = generateHashtag("a".repeat(139)), "#A" + "a".repeat(138); // "Should work"
console.log("re:", re);

re = generateHashtag("a".repeat(140)); // false
console.log("re:", re);
