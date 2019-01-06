/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {
    // yout code here 
    if (param <= 3) {
        return "invalid input";
    }
    else if (param % 2 != 1) {
        return "invalid input";
    }
    else {
        for (var i = 1; i <= param; i++) {
            var asteriskContainer = "";

            for (var j = 1; j <= param; j++) {
                if (i == Math.ceil(param / 2) && j == Math.ceil(param / 2)) {
                    asteriskContainer += "*";
                }
                else if (j == i || j == (param + 1) - i) {
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

scotlandFlag(5);
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

scotlandFlag(9);
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/