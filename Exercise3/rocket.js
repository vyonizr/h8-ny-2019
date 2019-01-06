function persegi(param1,param2)
{
  // your code here
  if (param1 == 0 || param2 == 0) {
    console.log("invalid value");
  }
  else {
    for (let i = 1; i <= param2; i++) {
      let hashContainer = "";

      for (let j = 1; j <= param1; j++) {
        if (i == 1 || i == param2) {
            hashContainer += "#";
        }
        else if (j == 1 || j == param1) {
            hashContainer += "#";
        }
        else {
            hashContainer += " ";
        }
      }
      console.log(hashContainer);
    }
  }
}

persegi(5,7);

/*
  #####
  #   #
  #   #
  #   #
  #   #
  #   #
  #####
*/

persegi(6,3);

/*
  ######
  #    #
  ######
*/


persegi(0,7); // invalid value 
persegi(4,0); // invalid value 