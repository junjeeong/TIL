/*** 2. 두 수 사이 숫자 ***/

/* user code */
function answer(x, y) {
    let result = [];
  
    if (x > y) {
        for (let i=y; i+1<x;i++){
            result.push(i+1);
        }
    }
    else{
        for (let i=x; i+1<y; i++){
            result.push(i+1);
        }
    }
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [3, 7],
    // TC: 2
    [8, 3],
    // TC: 3
    [12, 10],
  ];
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
  }
  