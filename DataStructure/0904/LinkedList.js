function Node(data){
    this.data = data;
    this.next = null;
}

function LinkedList(){
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.size= function(){
    return this.length; //해당 객체(링크드리스트)의 length를 반환하는 함수 size()
}

LinkedList.prototype.isEmpty = function(){
    return this.length === 0; //해당 객체(링크드리스트)의 길이가 0일시 true를 반환하는 함수 isEmpty()
}

let list1 = new LinkedList(); // 새로운 노드를 생성해서 list1에 참조값 전달

list1.head = new Node(123); //새로운 노드(data=123)를 생성한 뒤 head에 연결 -> 첫번째 노드 연결 
list1.length++; // 노드를 추가해줬으니 링크드리스트의 길이 ++

// console.log(list1);

list1.head.next = new Node(456); //첫 노드(객체)의 프로퍼티인 next에 다음 노드 연결(참조값전달)
list1.length++;  // 한 노드가 더 연결됐으니 전체 링크드리스트의 길이 ++

console.log(list1);