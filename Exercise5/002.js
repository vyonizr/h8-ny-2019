function soal2(param)
{
  // your code here
  if (param % 2 === 0) {
      return "invalid input";
  }
  else {
    let generalArray = [];

    for (let i = 0; i < Math.floor(param / 2 + 1); i++) {
      let groupingArray = [];
  
      for (let j = 0; j < param; j++ ) {
        if (i === 0 && j === Math.floor(param / 2)) {
          groupingArray.push("*");
        }
        else if (i === param - 1) {
          groupingArray.push("*");
        }
        else if (j >= Math.floor(param / 2) - i && j <= Math.floor(param / 2) + i ) {
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
}

console.log(soal2(5))
/*

  [
    ['','','*','',''],
    ['','*','*','*',''],
    ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
    ['','*',''],
    ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input

