/*
wajib pseudocode. 

Jawaban pseudocode disini 

FUNCTION 'soal2' with parameter 'param' as a number
  IF 'param' is 0 THEN
    RETURN "invalid input"
  ELSE
    STORE 'generalArray' with an empty array

    STORE 'i' with 0
    FOR 'i' less than 'param'
      STORE 'groupingArray' with an empty array
      STORE 'alphabet' with "abcdefghijklmnopqrstuvwxyz"

      STORE 'j' with 0
      FOR 'j' less than 'param'
        PUSH alphabet[index] to 'groupingArray' where 'index' equals to 'i' times 'param' plus 'j' modulo 26
        SET 'j' plus 1
      ENDFOR

      PUSH 'groupingArray' to 'generalArray'
      SET 'i' plus 1
    ENDFOR

    RETURN 'generalArray'
  ENDIF
ENDFUNCTION
*/

function soal2(param)
{
  // your code here
  if (param === 0) {
      return "invalid input";
  }
  else {
    let generalArray = [];

    for (let i = 0; i < param; i++) {
      let groupingArray = [];
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
      for (let j = 0; j < param; j++) {
          groupingArray.push(alphabet[((i * param) + j) % 26]);
      }
      generalArray.push(groupingArray);
    }
    return generalArray;
  }
}

console.log(soal2(8))
/*
  [
    ['a','b','c','d','e','f','g','h']
    ['i','j','k','l','m','n','o','p']
    ['q','r','s','t','u','v','w','x']
    ['y','z','a','b','c','d','e','f']
    ['g','h','i','j','k','l','m','n']
    ['o','p','q','r','s','t','u','v']
    ['w','x','y','z','a','b','c','d']
    ['e','f','g','h','i','j','k','l']
  ]
*/

console.log(soal2(2))
/*
  [
    ['a','b'],
    ['c','d']
  ]
*/

console.log(soal2(0)) // invalid input