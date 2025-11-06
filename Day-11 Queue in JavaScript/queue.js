// Simple queue using an array
class Queue {
    constructor() {
        this.items = [];        // storage
    }
    enqueue(element) {
        this.items.push(element); // add to back
    }
    dequeue() {
        if (this.isEmpty()) return null; // nothing to remove
        return this.items.shift();       // remove from front
    }
    getFront() {
        return this.isEmpty() ? null : this.items[0]; // first item
    }
    getRear() {
        return this.isEmpty() ? null : this.items[this.items.length - 1]; // last item
    }
    isEmpty() {
        return this.items.length === 0; // any items?
    }
    getSize() {
        return this.items.length;       // count
    }
}

// quick demo
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("Front = " + queue.getFront() + " | Rear = " + queue.getRear());
const x = queue.dequeue();
console.log("Dequeued = " + x);
console.log("Front = " + queue.getFront() + " | Rear = " + queue.getRear());
console.log("Size = " + queue.getSize());