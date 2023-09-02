/* 체스 세트 */

/* user code */
function answer(chess) {
    let result = [];
  
    let rule = [1,1,2,2,2, 8];
    for(let i =0;i<chess.length;i++){
        result.push(rule[i] - chess[i]);
    }
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [0, 1, 2, 2, 2, 7],
      // TC: 2
  [2, 1, 2, 1, 2, 1],

  // TC: 3
  [0, 1, 1, 5, 3, 6],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }
  