/*
  ============
  Generate Bar 
  ============

  Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
  - p => panjang 
  - t => tinggi 

*/

function generateBar(p,t) {
  // your code here
  if (p < t) {
    console.log("panjang harus lebih besar daripada tinggi");
  }
  else {
    for (let i = 1; i <= t; i++) {
      let oContainer = "";
    
      for (let j = 1; j <= p; j++) {
        if (i === 1 || i === t) {
          oContainer += "o"
        }
        else if (j === 1 || j === p) {
          oContainer +="o"
        }
        else {
          oContainer += " ";
        }
      }
      console.log(oContainer);
    }
  }
}

generateBar(4,3)//
/*
  oooo
  o  o
  oooo
*/

generateBar(10,4) // 
/*
  oooooooooo
  o        o
  o        o
  oooooooooo
*/

generateBar(4,5) // panjang harus lebih besar daripada tinggi 