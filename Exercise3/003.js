function soal3(param)
{
    // your code here
  let under20Array = [];
  let over20Array = [];

  for (var i = 0; i < param.length; i++) {
      if (param[i][1] <= 20) {
          under20Array.push(param[i][0]);
      }
      else {
          over20Array.push(param[i][0]);
      }
  }

  return ["under20: " + under20Array, "over20: " + over20Array].join("\n");

}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/