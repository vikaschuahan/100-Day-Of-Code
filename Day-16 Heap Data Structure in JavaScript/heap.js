// Min-heap using array indices
class MinHeap {
    constructor() {
        this.heap = [];               // internal array
    }
    size() {
        return this.heap.length;      // number of elements
    }
    getParentIndex(index) {           // parent of i
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {        // left child of i
        return 2 * index + 1;
    }
    getRightChildIndex(index) {       // right child of i
        return 2 * index + 2;
    }
    swap(i, j) {                      // swap two positions
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    bubbleUp(index) {                 // fix heap upwards
        let currentIndex = index;
        while (currentIndex > 0) {
            const parentIndex = this.getParentIndex(currentIndex);
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else break;
        }
    }
    sinkDown(index) {                 // fix heap downwards
        let currentIndex = index;
        const lastIndex = this.heap.length - 1;
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            let swapIndex = null;

            if (leftChildIndex <= lastIndex &&
                this.heap[leftChildIndex] < this.heap[currentIndex]) {
                swapIndex = leftChildIndex;
            }
            if (rightChildIndex <= lastIndex) {
                if (swapIndex === null &&
                    this.heap[rightChildIndex] < this.heap[currentIndex]) {
                    swapIndex = rightChildIndex;
                } else if (swapIndex !== null &&
                    this.heap[rightChildIndex] < this.heap[swapIndex]) {
                    swapIndex = rightChildIndex;
                }
            }
            if (swapIndex === null) break;
            this.swap(currentIndex, swapIndex);
            currentIndex = swapIndex;
        }
    }
    insert(value) {                   // add element
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }
    extractMin() {                    // remove smallest
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        this.swap(0, this.heap.length - 1);
        const minValue = this.heap.pop();
        this.sinkDown(0);
        return minValue;
    }
    peek() {                          // view smallest
        return this.heap.length === 0 ? null : this.heap[0];
    }
}

// demo
const minHeap = new MinHeap();
[12, 40, 25, 50, 60, 30, 35, 70, 65].forEach(v => minHeap.insert(v));

let nextMin;
while (minHeap.size() > 0) {
    nextMin = minHeap.extractMin();
    console.log('Extracted value: ' + nextMin + ' | New Root: ' + minHeap.peek());
}