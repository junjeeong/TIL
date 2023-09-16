function Node(data){
    this.data = data;
    this.next = null;
}

function CircularLinkedList(){
    this.head = null;
    this.length = 0;
}

CircularLinkedList.prototype.size= function() {
    return this.length; 
}


CircularLinkedList.prototype.isEmpty = function(){
    return this.length === 0; 
}

CircularLinkedList.prototype.append = function(data){
    let node = new Node(data),
        current = this.head,
        prev = null;

    if(this.head === null){
        this.head = node;
    }else{
        while(current.next != this.head){
            current = current.next;
        }
        current.next = node;
    }
    node.next = this.head;
    this.length++;
}

CircularLinkedList.prototype.printNode = function(){
    process.stdout.write(`head -> `);

    if(this.length != 0){
        process.stdout.write(`${this.head.data} -> `);
        for (let node = this.head.next; node != this.head; node = node.next) {
        process.stdout.write(`${node.data} - > `);
        }
    }

    console.log('null');   
};

CircularLinkedList.prototype.insert = function (data, position = 0) {
    if (position < 0 || position > this.length){
        console.error('인자값을 다시 확인해주세요ㅜㅜ');
        return false;
    }

    let node = new Node(data),
        current = this.head,
        prev = null,
        index = 0;
    
    if (position === 0) {
        node.next = current;

        if(this.isEmpty()){
            current = node;
        } else {
            while(current.next != this.head){
                current = current.next;
            }
        }

        this.head = node;
        current.next = this.head;
    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;

        if(node.next === null){
            node.next = this.head;
        }
    }

    this.length++;
    return true;
};


let cll = new CircularLinkedList();

cll.append(1);
cll.append(10);
cll.append(100);

cll.printNode();
cll.insert(1000, -1);

