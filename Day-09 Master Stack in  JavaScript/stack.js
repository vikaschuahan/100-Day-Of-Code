// Simple stack using an array
class Stack {
    constructor() {
        this.items = []; // internal storage
    }
    push(element) {
        this.items.push(element); // add on top
    }
    peek() {
        return this.isEmpty() ? null : this.items[this.items.length - 1]; // look at top
    }
    pop() {
        return this.isEmpty() ? null : this.items.pop(); // remove top
    }
    isEmpty() {
        return this.items.length === 0; // no items?
    }
    getSize() {
        return this.items.length; // current count
    }
}

// quick demo
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log('Top Element = ' + stack.peek());
const x = stack.pop();
console.log('Removed Element = ' + x);
console.log('Top Element = ' + stack.peek());