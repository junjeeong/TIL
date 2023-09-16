/* linkedList 객체 메소드 구현하기 */

//data를 인자로 받아 하나의 노드를 생성하는 Node함수
function Node(data){
    this.data = data;
    this.next = null;
}

//LinkedList 함수 
function LinkedList(){
    this.head = null;
    this.length = 0;
}

//리스트의 길이(크기)를 출력하는 메소드 size()
LinkedList.prototype.size= () => {
    return this.length; 
}

//리스트가 비었는지 확인해주는 메소드 isEmpty()
LinkedList.prototype.isEmpty = () => {
    return this.length === 0; 
}

//생성한 List를 보여주는 printNode()
//123 -> 456 -> 789 가 나와야 함
LinkedList.prototype.printNode = () => {
    for(let node = this.head; node != null; node = node.next){
        console.log(`${node.data} ->`);
    }
    console.log(null);
};

//끝에 새로운 node를 추가하는 메소드 append()
LinkedList.prototype.append = () => {
        
}

const ll = new LinkedList();

ll.head = new Node(123);
ll.length++;
ll.head.next = new Node(456);
ll.length++;
ll.head.next = new Node(789);
ll.length++;

ll.printNode();