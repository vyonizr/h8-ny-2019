function rocket(param)
{
  // your code here 
  let generalArray = [];

  for (let i = 0; i < param; i++) {
    let groupingArray = [];

    for (let j = 0; j < param; j++) {
      if (param % 2 === 1 && i === Math.floor(param / 2) && j === Math.floor(param / 2)) {
        groupingArray.push("*");
      }
      else if (param % 2 === 0 && ((i === param / 2 - 1 && (j === param / 2 || j === i)) || (i === param / 2 && (j === i || j === param / 2 - 1 )))) {
        groupingArray.push("*");
      }
      else {
        groupingArray.push("");
      }
    }
    generalArray.push(groupingArray);
  }
  return generalArray;
}

console.log(rocket(5))
/*
  [
    ['','','','',''],
    ['','','','',''],
    ['','','*','',''],
    ['','','','',''],
    ['','','','','']
  ]
*/

console.log(rocket(3))
/*
  [
    ['','',''],
    ['','*',''],
    ['','',''],
    
  ]
*/

/*
 (2, 2), (2, 3), (3, 2) (3, 3)
*/


console.log(rocket(4))
/* (1, 1), (1, 2), (2, 1), (2, 2)
  [
    ['','','',''],
    ['','*','*',''],
    ['','*','*',''],
    ['','','',''],
    
  ]
*/

console.log(rocket(2))
/* (0, 0), (0, 1), (1, 0), (1,1)
  [
    ['*','*'],
    ['*','*'],
  ]
*/

console.log(rocket(1))
/*
  [
    ['*']
  ]
*/