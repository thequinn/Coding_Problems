/*
File Finder

- Task:
(1) Search through a virtual filesystem of sorts to find a file, then return the path to the file.

(2) Sometimes there might not be a file in the filesystem. In that case, just throw an error. You're always guaranteed to receive a filesystem with either one or zero files.
*/


function search(files, root = true) {
  if(typeof files != 'object')    return true;

  for(var p of Object.keys(files)) {
    let r = search(files[p], false);

    if(r && r == true) return p;
    else if(r) return p + '/' + r;
  }

  if(root) throw new Error('No files!');
}


let files = {
  'New folder': {
    'New folder': {}
  },
  'New folder (1)': {
    'New folder': {
      'funnyjoke.txt': 'I PRANKED YOU'
    }
  },
  'New folder (2)': {}
};
console.log("\nre: ", search(files)); // New folder (1)/New folder/funnyjoke.txt
