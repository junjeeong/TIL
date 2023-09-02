/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
    let result = [];
    let overPoint = 0;
    let sum =0;
  
    for(let i=0;i<dwarf.length;i++){
      sum += dwarf[i]
    }
    overPoint = sum - 100;
    
    for(let i=0;i<dwarf.length;i++){
        for(let j=i+1;j<dwarf.length;j++){
            if(dwarf[i] + dwarf[j] == overPoint) {
                dwarf.splice(i,1);
                dwarf.splice(j-1,1);
            }
        }
    }
    result = dwarf;
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [1, 5, 6, 7, 10, 12, 19, 29, 33],
  
    // TC: 2
    [25, 23, 11, 2, 18, 3, 28, 6, 37],
  
    // TC: 3
    [3, 37, 5, 36, 6, 22, 19, 2, 28],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }
  