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

list1.head = new Node(123);
list1.length++;

// console.log(list1);

list1.head.next = new Node(456);
list1.length++;

console.log(list1);