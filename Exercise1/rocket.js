/*
  soal : 
  buatlah bendera inggris pada abad pertengahan dan era perang salib 
  dengan lambang St. George's Cross, 
  https://id.wikipedia.org/wiki/Bendera_Inggris

  dengan berbagai ukuran yang ditentukan
  oleh input. bendera berbentuk persegi .

  output hanya menggunakan console.log string yang isinya 
  hanya berupa spasi kosong dan char *

  petunjuk : 
  - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param)
{
  // your code here
  if (param % 2 === 0) {
    console.log("invalid input");
  }
  else {
    for (var i = 1; i <= param; i++) {
      var flagContainer = "";
  
      for (var j = 1; j <= param; j++) {
        if (i == Math.ceil(param / 2)) {
          flagContainer += "*";
        }
        else if (j == Math.ceil(param / 2)) {
          flagContainer += "*";
        }
        
        else {
          flagContainer += " ";
        }
      }
      console.log(flagContainer);
    }
  }
}

benderaInggris(9);

/*
  output:
  '    *    ' // 1
  '    *    ' // 2
  '    *    ' // ..
  '    *    '
  '*********'
  '    *    '
  '    *    '
  '    *    '
  '    *    ' // 9
*/

benderaInggris(5);
/*
  '  *  '
  '  *  '
  '*****'
  '  *  '
  '  *  '
*/

benderaInggris(4) // invalid input