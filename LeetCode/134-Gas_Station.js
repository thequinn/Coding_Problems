/*
134. Gas Station

*/
const canCompleteCircuit = (gas, cost) => {
  let total_tank = 0;
  let curr_tank = 0;
  let starting_station = 0;

  for (let i = 0; i < gas.length; ++i) {
    total_tank += gas[i] - cost[i];
    curr_tank  += gas[i] - cost[i];

    if (curr_tank < 0) {
      starting_station = i + 1;
      curr_tank = 0;
    }
  }

  return total_tank >= 0 ? starting_station : -1;
}

