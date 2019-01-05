/*
  ======================
  String to Multidimensi
  ======================

  [INSTRUKSI]
  diberikan sebuah string yang jumlah characternya bisa di akar pangkat
  (4, 9, 16, 25 , ... ) 
  ubahlah karakter - karakter itu menjadi array multidimensi
  dimana hasil akar pangkat jumlah karakternya menjadi row dan col

  [EXAMPLE]

  stringToMultidimensi("0120194124213712")
  jumlah char : 16 
  row dan col = akat 16 
  row dan col = 4
  output: 
  [
     1 2 3 4 
    [0,1,2,0], 1 
    [1,9,4,1], 2 
    [2,4,2,1], 3
    [3,7,1,2]  4
  ]

 */

function stringToMultidimensi(str) {
  // your code here 
  const strLength = str.length;
  const strRoot = Math.sqrt(strLength)

  if (Number.isInteger(strRoot)) {
    let generalArray = [];

    for (let i = 0; i < strRoot; i++) {
      let groupingArray = [];

      for (let j = 0; j < strRoot; j++) {
        groupingArray.push(str[(i * strRoot) + j])
      }
      generalArray.push(groupingArray);
    }
    console.log(generalArray);
  }
  else {
  console.log("char count is invalid");
  }
}

 stringToMultidimensi("0120194124213712")
 /*
  [
    [0,1,2,0],
    [1,9,4,1],
    [2,4,2,1],
    [3,7,1,2]
  ]
 */

stringToMultidimensi("01201941242137127")
 /*
  // char count invalid
 */