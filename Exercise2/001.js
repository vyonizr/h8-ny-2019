/*
  analisa sendiri dengan apa yang diminta soal melalui test case. 
  wajib menggunakan pseudocode

  PSEUDOCODE HERE : 


*/
function soal1(param)
{
  // your code here
  var array = [];

  for (var i = 0; i < Math.ceil(param / 3); i++) {
      array.push('!', '@', '#');
  }
  if (param == 0) {
      return "Invalid input";
  }
  else if (param % 3 == 0) {
    return array;
  }
  else {
    return array.slice(0, -((param % 3) + 1));
  }
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input