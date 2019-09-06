function streetFighterSelection(fighters, pos, moves){
  var result = [];
  
  moves.forEach(function(move) {
    if (move === "up") {
      console.log("move: ", move, ", pos[0]: ", pos[0]);
      pos[0] = 0;
    }
    else if (move === "down") {
      console.log("move: ", move, ", pos[0]: ", pos[0]);
      pos[0] = 1;
    }
    else if (move === "right") {
      console.log("move: ", move, ", pos[1]: ", pos[1]);
      pos[1] = (pos[1] === 5) ? 0 : pos[1] + 1;
    }
    else if (move === "left") {
      console.log("move: ", move, ", pos[1]: ", pos[1]);
      pos[1] = (pos[1] === 0) ? 5 : pos[1] - 1;
    }
    
    result.push(fighters[pos[0]][pos[1]]);
  });
  return result;
}

fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ['up', 'left', 'right', 'left', 'left'];
// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
console.log(streetFighterSelection(fighters, [0, 0], moves));

