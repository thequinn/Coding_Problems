/*
56. Merge Intervals

注意:
- 這裡有3種方法寫同一個思路, 因為我要學不同寫法.
*/

// Approach #1:
// - https://leetcode.com/problems/merge-intervals/discuss/437662/JavaScript-easy-to-understand
//
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    for(let i = 0; i < intervals.length; i++){
        if(i == 0 || intervals[i][0] > result[result.length - 1][1])
            result.push(intervals[i]);
        else
            result[result.length - 1][1] = Math.max(intervals[i][1], result[result.length - 1][1]);
    }
    return result;
};

// Appraoch #2:
// - https://leetcode.com/problems/merge-intervals/discuss/554700/simpler-javascript-solution
//
let merge_1 = function(intervals) {
  if (!intervals.length) return intervals;

  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let previous = intervals[0], answer = [previous];
  console.log("previous:", previous);
  console.log("answer:", answer);

  for (let current of intervals) {
    if (current[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      answer.push(current);
      previous = current;
    }
  }
  return answer;
};

// Approach #3:
// - https://leetcode.com/problems/merge-intervals/discuss/21424/Simple-JavaScript-solution
//
let merge_2 = function merge(intervals) {
    var res = [];
    intervals
        .sort((a, b) => a.start - b.start)
        .concat(new Interval(Number.MAX_VALUE, Number.MAX_VALUE))
        .reduce((curr, next) => {
            if (next.start <= curr.end) {
                curr.end = Math.max(curr.end, next.end);
                return curr;
            } else {
                res.push(curr);
                return next;
            }
        });
    return res;
}



//---------- Testing ----------

// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6]
in1 = [[1,3],[2,6],[8,10],[15,18]] // Output: [[1,6],[8,10],[15,18]]

in2 = [[1,7],[2,6]] // Output: [[1,7]]

in3 = [[1,4],[4,5]]  // Output: [[1,5]]

res = merge_1(in1)
//res = merge_1(in1)
console.log("\nres: ", res)
