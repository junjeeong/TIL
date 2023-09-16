/* user code */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];
      
  let cll = LinkedList(),
      current, prev;

  //n번 반복문돌면서 0부터 n까지 원형리스트연결(마지막 노드 next는 this.head)
  while(let i = 1; i <= n; i++){
    current = new Node(i);

    prev = current;
    current = current.next;
  } 
  //첫번째 주사위 떄 나온, m번째 후보 제외하기(배열에 넣기)
  prev = null;
  current = this.head;

  for(let i = 1; i <= m; i++){
    if (i = m){
      prev.next = current.next;
      result.pop('m');
    }
    prev = current;
    current = current.next;
  }

  //후보 한명 남을때까지(cll.size() == 1) k씩 전진하며 후보 제외하기
  while(cll.size() != 1){
    for(let i = 0; i < k; i++){
      //k번씩 이동하기
      prev = current;
      current = current.next;
    }
    //해당 후보 제외하기
    prev.next = current.next;
    result.pop(current.data);
  }
  //대표 정해지면 리스트정리하고 result에 대표번호 넣기
  if(cll.size() == 1){
    this.head = current;
    result.pop(current.data);
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],

  // TC: 2
  [10, 2, 3],

  // TC: 3
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
