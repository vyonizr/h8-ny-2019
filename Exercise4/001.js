function soal1(param)
{
  // Your Code Here
  let generalArray = [];

  for (i = 1; i <= param; i++) {
    if (i === 1) {
      generalArray.push("");
    }
    else if (i % (4 * 7) === 0) {
      generalArray.push("FizzBuzz");
    }
    else if (i % 4 === 0) {
      generalArray.push("Fizz")
    }
    else if (i % 7 === 0) {
      generalArray.push("Buzz");
    }
    else {
      generalArray.push("");
    }
  }
  return generalArray;
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']