function totalVol(blocks) {
  let leftMax = 0;
  let rightMax = 0;
  let rightMaxes = [];
  let water = 0;
  for (let i = blocks.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, blocks[i]);
    rightMaxes[i] = rightMax;
  }

  for (let i = 0; i < blocks.length; i++) {
    leftMax = Math.max(leftMax, blocks[i]);
    rightMax = rightMaxes[i];
    water += Math.min(leftMax, rightMax) - blocks[i];
  }
  return water;
}
