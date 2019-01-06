/*
  =========
  Triangel
  =========

  [INSTRUCTION]
  Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya 
  adalah tinggi (t) nya.
  bila t = 1 maka outputnya : t is invalid
  
  [EXAMPLE]
  triangel(5)
  output:
    *    
     ***
    *****
   *******
  *********

  triangel(3)
  output:
    *    
     ***
    *****

*/

function triangel(t) {
  // your code here
  if (t < 2) {
    console.log("t is invalid");
  }
  else {
    for (let i = 1; i <= t; i++) {
      let asteriskContainer = "";

      for (let j = 1; j <= (t * 2) - 1; j++) {
        if (i === 1 && j === t) { // top
          asteriskContainer += "*";         
        }
        else if (i === t) { // bottom
          asteriskContainer+= "*";
        }
        else if (j >= t - i + 1 && j <= t + i - 1) {
          asteriskContainer += "*";
        }
        else {
          asteriskContainer += " ";
        }
      }
      console.log(asteriskContainer);
    }
  }
}

triangel(3)
/*
    *    
   ***
  *****
*/

triangel(5)
/*
      *    
     ***
    *****
   *******
  *********
*/

triangel(1) // t is invalid