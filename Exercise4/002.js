function soal2(param)
{
  // your code here
  if (param.length < 3) {
      return "invalid input";
  }
  else {
    let generalArray = [];
    const lastIndex = param.length - 1;

    for (let i = 0; i < param.length; i++) {
      if (param.length % 2 === 1 && i === Math.floor(param.length / 2)) {
          generalArray.push(param[0] * param[lastIndex]);
      }
      else if (param.length % 2 === 0 && (i === param.length / 2 || i === param.length / 2 - 1)) {
          generalArray.push(param[0] * param[lastIndex]);
      }
      else if (i === 0) {
          generalArray.push(param[i]);
        }
      else if (i === lastIndex) {
          generalArray.push(param[lastIndex]);
      }
      else {
          generalArray.push(param[i]);
      }
    }
    return generalArray;
  }
}

console.log(soal2([34,'','','',40]))
// [34,''1360,'',40]

console.log(soal2([1,2,3,4,5]))
// [1,2,5,4,5]

console.log(soal2([20,'','','','','','',30]))
// [20,'','',600,600,'','',30])

console.log(soal2([6,'','','','','',9]))
// [6,'','',54,'','',9]

console.log(soal2([1,2])) // invalid input 
console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input 