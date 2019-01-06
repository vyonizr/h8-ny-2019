function soal3(param)
{
    // your code here
    var paramArrayI = [];

    for (var i = 0; i < param; i++) {
        var paramArrayJ = [];

        for (var j = 0; j < param; j++) {
            paramArrayJ.push((i * 5) + j + 1);
        }
        paramArrayI.push(paramArrayJ);
    }
    return paramArrayI;
}

console.log(soal3(5)) 
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

console.log(soal3(4))

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/