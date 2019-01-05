/*
  ==================
  WordToArrayReverse
  ==================

  [INSTRUCTION]
  buatlah sebuah program yang mengconvert string menjadi array, yang di reverse
  posisinya berdasarkan per kata 

  [RULE]
  - dilarang menggunakan function bawaan javascript kecuali split

  [EXAMPLE]

  wordToArrayReverse("Hello my name is Dimas")
  output:["Dimas","is","name","my","Hello"]

  wordToArrayReverse("Lorem ipsum sit dolor amet")
  output:["amet","dolor","sit","ipsum","Lorem"]

*/

function wordToArrayReverse(str) {
  // your code here 
  let reversedWordArray = [];
  let strArray = str.split(" ");

  for (let i = strArray.length - 1; i >= 0; i--) {
    reversedWordArray.push(strArray[i]);
  }
  console.log(reversedWordArray);
}

wordToArrayReverse("Hello my name is Dimas")
//["Dimas","is","name","my","Hello"]

wordToArrayReverse("Lorem ipsum sit dolor amet")
//["amet","dolor","sit","ipsum","Lorem"]

