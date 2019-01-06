function rocket(param)
{
  // your code here
  let generalArray = [];

  for (let i = 0; i < param; i++) {
    let groupingArray = [];

    for (let j = 0; j < param; j++) {
      let subGroupingArray = []

      for (let k = 0; k <= 1; k++) {
        if (k === 0) {
          subGroupingArray.push(i);
        }
        else if (k === 1) {
          subGroupingArray.push(j);
        }
      }
      groupingArray.push(subGroupingArray);
    }
    generalArray.push(groupingArray);
  }
  return generalArray;
}

console.log(rocket(3))

/*
  [
  [[0,0],[0,1],[0,2]],
  [[1,0],[1,1],[1,2]],
  [[2,0],[2,1],[2,2]]
  ]
*/