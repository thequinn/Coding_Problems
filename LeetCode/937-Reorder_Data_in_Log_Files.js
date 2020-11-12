/*
937. Reorder Data in Log Files
*/

const reorderLogFiles = (logs) => {

  const body = s => s.slice(s.indexOf(' ') + 1);
  const isNum = s => /\d/.test(s);

  const compare = (a, b) => {
    const n = body(a).localeCompare(body(b));

    if (n !== 0)
      return n;
    else
      return a.localeCompare(b);
  };

  const digitLogs = [];
  const letterLogs = [];

  for (const log of logs) {
    if (isNum(body(log)))
      digitLogs.push(log);
    else
      letterLogs.push(log);
  }
  return [...letterLogs.sort(compare), ...digitLogs];
};

//-----Test Case-----
let logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];
console.log(reorderLogFiles(logs));
