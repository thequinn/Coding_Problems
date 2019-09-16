function Automaton() {
   this.states = {
     "q1": ["q1", "q2"],
     "q2": ["q3", "q2"],
     "q3": ["q2", "q2"]
   };
}

Automaton.prototype.readCommands = function(commands) {
  return q2 === commands.reduce(function(state, input) {
    this.states[state][input];
  }.bind(this), "q1");
}

var myAuto = new Automaton();
var myAuto.readCommands(["1"]);                           // T
var myAuto.readCommands(["1", "0", "0", "1"]);            // T
var re = myAuto.readCommands(["1", "0", "0", "1", "0"]);  // F
console.log(re);
