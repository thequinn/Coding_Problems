/*
42. Trapping Rain Water

*/

var trap = function(height) {
  if (height == null)   return 0;

  let size = height.length;
  let leftMax = [], rightMax = [];

  leftMax[0] = height[0];
  for (let i = 1; i < size; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  rightMax[size - 1] = height[size - 1];
  for (let i = size - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  let totalWater = 0, minBuildingH = 0, waterH = 0;
  for (let i = 1; i < size - 1; i++) {
    minBuildingH = Math.min(leftMax[i], rightMax[i]);
    waterH = minBuildingH - height[i];
    totalWater += waterH;
  }
  return totalWater;
};


//-----Test Cast-----
let height = [0,1,0,2,1,0,1,3,2,1,2,1];  // 6
console.log("result: ", trap(height));
