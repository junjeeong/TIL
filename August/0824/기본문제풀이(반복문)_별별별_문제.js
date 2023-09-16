/*** 1. 별별별 ***/

/* user code */
function answer(num) {
  let result = "";

  for(num;num!=0;num--)
  {
    let result = result + '*';
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  5,
  // TC: 2
  7,
  // TC: 3
  12,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
