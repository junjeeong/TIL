//data와 next와 prev를 갖고 있는 객체(함수)
function Node(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

//head와 tail과 length를 갖고 있는 객체(함수)
function DoubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoubleLinkedList.prototype.size = function (){
    return this.length;
};

DoubleLinkedList.prototype.isEmpty = function (){
    return (this.length === 0);
};

DoubleLinkedList.prototype.printNode = function (){
    process.stdout.write(`head -> `);
    for(let node = this.head; node != null; node = node.next){
        process.stdout.write(`${node.data} -> `);
    }
    process.stdout.write(`null`);
};

DoubleLinkedList.prototype.printNodeInverse = function (){

    process.stdout.write(`null <- `);
    for(let node = this.head; node != null; node = node.next){
        process.stdout.write(`${node.data} <- `);
    }
    process.stdout.write(`tail`);
};

DoubleLinkedList.prototype.append = function (value) {
    let node = new Node(value);

    if (this.head === null){
        this.head = node;
        this.tail = node;
    }else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    this.length++;
};

DoubleLinkedList.prototype.insert = function (value, position=0){
    let node = new Node(value),
        right_current = this.head,
        lef_current = this.tail,
        prev;
        
    if (position < 0 || position > this.length || Number.isNaN(position)) 
    {
        console.error('인자값을 다시 확인해주세요0ㅅ0');
        return;
    }
    if (position === 0){
        node.next = right_current;
        right_current.prev = node;
        this.head = node;
        return;
    } 
    if (position === this.length){
        left_current.next = node;
        node.prev = left_current;
        this.tail = node;
    }
    // position이 중간보다 앞쪽에 있는 경우
    if(position < this.length / 2){
        for (let i = 0; i < position; i++){
            prev = rgh_current;
            right_current = right_current.next;
        }
        node.next = right_current;
        prev.next = node;
        node.prev = prev;
        right_current.prev = node;
    }else {
        // position이 중간보다 뒤쪽에 있는 경우
        for(let i = 0; i< position; i++){
            prev = lef_current;
            lef_current = lef_current.next;
        }
        node.next = right_current;
        prev.next = node;
        node.prev = prev;
        right_current.prev = node;
    }
    this.length++;
}

let dll = new DoubleLinkedList();

dll.append(1);
dll.append(10);
dll.append(100);

dll.printNode();
console.log('\n');
dll.printNodeInverse();
console.log('\n');
dll.insert(1000, 3);
dll.printNode();


