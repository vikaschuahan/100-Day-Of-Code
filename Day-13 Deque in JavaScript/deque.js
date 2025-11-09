class Deque {
    constructor() {
        this.items = {};   // storage (sparse indexes)
        this.head = 0;     // front index
        this.tail = 0;     // next position after last
    }
    addHead(element) {     // insert at front
        this.head--;
        this.items[this.head] = element;
    }
    addTail(element) {     // insert at back
        this.items[this.tail] = element;
        this.tail++;
    }
    removeHead() {         // remove from front
        if (this.isEmpty()) return undefined;
        const value = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        if (this.isEmpty()) this.reset();
        return value;
    }
    removeTail() {         // remove from back
        if (this.isEmpty()) return undefined;
        this.tail--;
        const value = this.items[this.tail];
        delete this.items[this.tail];
        if (this.isEmpty()) this.reset();
        return value;
    }
    peekHead() {           // view front
        return this.isEmpty() ? undefined : this.items[this.head];
    }
    peekTail() {           // view last
        return this.isEmpty() ? undefined : this.items[this.tail - 1];
    }
    isEmpty() {            // no elements?
        return this.tail === this.head;
    }
    size() {               // count
        return this.tail - this.head;
    }
    reset() {              // clear indices
        this.head = 0;
        this.tail = 0;
    }
    print() {              // show deque
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return;
        }
        let out = "";
        for (let i = this.head; i < this.tail; i++) {
            out += this.items[i] + (i < this.tail - 1 ? " <-> " : "");
        }
        console.log(out);
    }
}

// demo
const d = new Deque();
d.addTail(10);
d.addTail(20);
d.addTail(30);
d.addHead(40);
d.addHead(50);
d.removeHead();
d.removeTail();
d.print();
console.log("Front:", d.peekHead(), "Rear:", d.peekTail(), "Size:", d.size());


