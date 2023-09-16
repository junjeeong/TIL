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
LinkedList.prototype.printNode = function() {
    for(let node = this.head; node != null; node = node.next){
    if(node.next != null) process.stdout.write(`${node.data} -> `);
    else process.stdout.write(`${node.data}`);
    }
};

//끝에 새로운 node를 추가하는 메소드 append()
LinkedList.prototype.append = function (data) {
    let node = new Node(data);
    let current = this.head;

    if(this.head === null)
        this.head = node;
    else {
        while(current.next != null){
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
}

//원하는 위치에 노드를 추가하는 메소드 insert()
LinkedList.prototype.insert = function(data, position=0){
    if (position < 0 || position > this.length) return false;
    
    let node = new Node(data),
        current = this.head,
        index = 0,
        prev;

    if (position == 0){
        node.next = current;
        this.head = node;
    } else {
        while (index++ < position){
            prev = current;
            current = current.next;
        }
        node.next = current;
        prev.next = node;
    }
    this.length++;
    return true;
} 

//remove() : 매개변수로 받은 data가 들어있는 node를 list에서 삭제하는 함수 

LinkedList.prototype.remove = function (value){
    //노드를 순회한다.
    //value를 node.data로 갖고있는 노드의 prev.next를 current.next로 바꾸면 되지 않을까??
    //

    let current = this.head,
        prev = null;

    while(current !== null){
        if (current.data == value){
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.length--;
            return;
        }
        prev = current;
        current = current.next;
    }

    console.log("value를 찾지 못하였습니다.");
}


//////* Test Code *//////
const ll = new LinkedList();

ll.append(1);
ll.append(10);
ll.append(100);

ll.insert(3, 0);
ll.remove(1000);
ll.printNode();
