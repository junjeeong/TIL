/*** 2. 나누기와 대소비교 ***/

/* user code */
function answer(a, b, c, d) {
    let result;
  
    if(a/b > c/d)
    result = 1;
else if(c/d > a/b)
result = -1;
else
result = 0;
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [14, 2, 6, 6],
    // TC: 2
    [6, 7, 8, 9],
    // TC: 3
    [18, 2, 36, 4],
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(
      `#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`
    );
  }
  