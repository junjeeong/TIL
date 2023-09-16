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

//printNode() 구현 
LinkedList.prototype.printNode = function (){ 
    for(let node = this.head; node != null; node = node.next){
        process.stdout.write(`${node.data} -> `);
    }
    console.log(null);
};

//객체(링크드리스트) 메소드 append() 구현 :  제일 마지막 노드에 추가 
LinkedList.prototype.append = function(data){
    let node = new Node(data);
    let current = this.head;

    if(this.head === null) {
        this.head = node;
    } else {
        while (current.next != null){
        current = current.next; 
        } 
        current.next = node;
    }
    
    this.length++;
}

let ll = new LinkedList();

ll.append(1);
ll.append(10);
ll.append(100);

ll.printNode();
console.log(ll.size());