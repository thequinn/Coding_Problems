/*
Word a10n (abbreviation)
*/

let abbreviate = function(str) {
  str = str.replace(/[a-z]+/gi, word => {
    return (word.length <= 3) ? 
                word : `${word[0]}${word.length-2}${word[word.length-1]}`;
  });

  return str;
}


let re = "";

//re = abbreviate("internationalization");  // "i18n"
//re = abbreviate("Accessibility");         // "A11y"

//re = abbreviate("elephant-ride");           // "e6t-r2e"

re = abbreviate("Sky-top truly rocks!");    // "Sky-top t3y r3s!"
console.log("re: ", re);

//re = abbreviate("elephant-rides are really fun!");  // "e6t-r3s are r4y fun!"
