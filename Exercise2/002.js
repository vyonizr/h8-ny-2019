// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
/* 
[
[0, 5], 
[1, 4], 
[2, 3]
]  

*/
// [[0, 4], [1, 3], [2, "Instruktur"]]
// [[0, 6], [1, 5], [2, 4], [3, "Instruktur"]]

function soal2(param)
{
  //your code here
  var generalArray = [];

  for (var i = 0; i <= Math.floor((param.length - 1) / 2); i++) {
    var groupingArray = [];

    for (var j = 0; j <= 1; j++) {
      if (i == Math.floor((param.length - 1) / 2) && param.length % 2 == 1 && j ==1) {
        groupingArray.push("Instruktur");
      }
      else if (j == 0) {
        groupingArray.push(param[j + i]);
      }
      else if (j == 1) {
        groupingArray.push(param[param.length - j - i]);
      }
    }
    generalArray.push(groupingArray);
  }
  return generalArray;
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
  output: 
  [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]