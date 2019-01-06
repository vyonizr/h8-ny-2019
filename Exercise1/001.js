function soal1(param)
{
    // your code here 
    var paramArray = [];

    for (var i = 0; i < param; i++) {
        if(param % 2 == 1 && (i == Math.floor(param / 2))) { // odd 'param'
            paramArray.push("*");
        }
        else if(param % 2 == 0 && (i == (param / 2 - 1) || i == (param / 2))) { // even 'param'
            paramArray.push("*");
        }
        else {
            paramArray.push("");
        }
    }
    return paramArray;
}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']