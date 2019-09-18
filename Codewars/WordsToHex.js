function wordsToHex(words) {
  return words.split(' ').map(w =>
    '#' + [0, 1, 2].map(i =>
      (w.charCodeAt(i) || '00').toString(16)
    ).join('')
  );
}

let re;
re = wordsToHex("Hello, my name is Gary and I like cheese.");
//['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']
console.log("re: ", re);

