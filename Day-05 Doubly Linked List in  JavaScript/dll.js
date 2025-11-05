// Node class - each node has data and pointers to previous and next nodes
class Node{
    constructor(data, prev=null, next=null){
        this.data = data;
        this.prev = prev;  // points to previous node
        this.next = next;  // points to next node
    }
}

// DoublyLinkedList class - manages the list with head and tail
class DoublyLinkList{
    constructor(){
        this.head = null;  // first node
        this.tail = null;  // last node
        this.size = 0;     // number of nodes
    }

    // add node at the end
    append(data){
        const newNode = new Node(data, this.tail);
        
        if(!this.head){  // if list is empty
            this.head = newNode;
            this.tail = newNode;
        }
        else{  // if list has nodes, add at end
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // add node at the beginning
    prepend(data){
        const newNode = new Node(data, null, this.head);
        
        if(!this.head){  // if list is empty
            this.head = newNode;
            this.tail = newNode;
        }
        else{  // if list has nodes, add at start
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // insert node at specific position
    insertAt(data, index){
        // check if index is valid
        if(index < 0 || index > this.size){
            console.error("Invalid Index");
            return false;
        }
        
        // if index is 0, add at start
        if(index === 0){
            this.prepend(data);
            return true;
        }
        
        // if index is at end, add at end
        if(index === this.size){
            this.append(data);
            return true;
        }
        
        // find the node at index position
        let current = this.head;
        let count = 0;
        while(count < index){
            current = current.next;  // move to next node
            count++;
        }
        
        // create new node and fix pointers
        const newNode = new Node(data, current.prev, current);
        current.prev.next = newNode;  // previous node points to new node
        current.prev = newNode;        // current node's prev points to new node
        this.size++;
        return true;
    }

    // remove node at specific position
    removeAt(index){
        // check if index is valid
        if(index < 0 || index >= this.size){
            console.error("Invalid Index");
            return null;
        }
        
        let current;
        let removedData;
        
        // if removing first node
        if(index === 0){
            removedData = this.head.data;
            this.head = this.head.next;
            
            if(this.head){
                this.head.prev = null;  // new head has no previous
            } else {
                this.tail = null;  // list is now empty
            }
        }
        // if removing last node
        else if(index === this.size - 1){
            current = this.tail;
            removedData = current.data;
            this.tail = current.prev;  // new tail is previous node
            this.tail.next = null;     // new tail has no next
        }
        // if removing middle node
        else {
            let count = 0;
            current = this.head;
            
            // find the node to remove
            while(count < index){
                current = current.next;
                count++;
            }
            
            removedData = current.data;
            // fix pointers to skip removed node
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        
        this.size--;
        return removedData;
    }

    // check if list is empty
    isEmpty(){
        return this.size === 0;
    }

    // get number of nodes
    getSize(){
        return this.size;
    }

    // print list from start to end
    printListForward(){
        let current = this.head;
        let result = '';
        
        while(current){
            result += current.data + '<->';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }

    // print list from end to start
    printListBackward(){
        let current = this.tail;
        let result = '';
        
        while(current){
            result += current.data + '<->';
            current = current.prev;
        }
        result += 'null';
        console.log(result);
    }
}

// Test the doubly linked list
const list = new DoublyLinkList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.insertAt(60, 2);  // insert 60 at position 2
list.printListForward();   // print forward
list.printListBackward();  // print backward