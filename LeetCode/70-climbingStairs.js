// Reference:
//
// - Online solutions
// https://www.youtube.com/watch?v=eREiwuvzaUM&t=54s
//
// - Complexity analysis:
// https://leetcode.com/problems/climbing-stairs/solution/


// steps: total num of stairs (destination step)


// Approach #1: Brute Force [Time Limit Exceeded]
/*
var countPaths = function(steps) {
    // If current number of steps is negative, there is 0 way to walk the step
    if (steps < 0)      return 0;

    // If you are at the top step, there is only 1 way to walk the step
    if (steps === 0)    return 1;

    // Total number of paths
    return countPaths(steps - 1) + countPaths(steps - 2);
}
*/

//---------------------------------------------

// Approach #2: Memoization
var countPathsMemo = function(steps) {
    if (steps < 0)  return 0;
    return countPathsMemo(steps, memo); // Helper func to pass memo[]
}

var countPathsMemo = function(steps, memo) {
    if (steps < 0)      return 0;
    else if (steps === 0)   return 1;

    // If we haven't computed diff paths of reaching the "steps",
    //  ie. memo[65] means 65th step.
    // - And there are always the same number of paths to reach the 65th step
    if (memo[steps] === 0) {
        // Store the num of paths to reach 65th step
        memo[steps] = countPathsMemo(steps - 1, memo) + countPathsMemo(steps - 2, memo);
    }
    return memo[steps];
}

//---------------------------------------------

// Approach #3: DP
var countPathsDP = function() {
    if (steps < 0)      return 0;

    // (In Java) To prevent array index out of bounce exception when creating paths[2]
    else if (steps <= 1)   return 1;

    var paths = [];
    paths[0] = 1;
    paths[1] = 1;
    for (int i = 2; i < steps; i++) { // Start calculating from steps = 2
        paths[i] = paths[i - 1] + paths[i - 2];
    }
    return paths[steps];
}

//---------------------------------------------

// Approach #4: Fibonacci Number (Improved based on Approach #3)
// - We only need the last 2 values to calculate the paths to the current paths[steps]
var countPathsI = function() {
    if (steps < 0)      return 0;
    else if (steps <= 1)   return 1;

    var paths = [1, 1];
    for (int i = 2; i < steps; i++) {
        var count = paths[i - 1] + paths[i - 2];

        paths[0] = paths[1];
        paths[1] = count;
    }
    return paths[1];

}

//---------------------------------------------


