function soal3(param1)
{
  // your code here 
  let generalArray = [];

  for (let i = 0; i < param1; i++) {
    let groupingArray = [];
    
    for (let j = 0; j < param1; j++) {
      if (i % 2 === 0) {
          groupingArray.push((i * param1) + j + 1);
      }
      else if (i % 2 === 1) {
          groupingArray.push(((i + 1) * param1) - j);
      }
    }
    generalArray.push(groupingArray);
  }
  return generalArray;
}

console.log(soal3(3))
/*
  [
    [1,2,3],
    [6,5,4],
    [7,8,9]
  ]

*/

console.log(soal3(2))
/*
  [
    [1,2],
    [4,3]
  ]

*/

console.log(soal3(4))
/*
  [
    [1,2,3,4],
    [8,7,6,5],
    [9,10,11,12],
    [16,15,15,13]
  ]

*/
