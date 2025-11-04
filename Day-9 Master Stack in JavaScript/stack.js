class stack{
    constructor() {
        this.items=[]
        
    }
    push(element){
        this.items.push(element);
     }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length-1];
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
        const removedElement=this.items.pop();
        return removedElement;
    }
    isEmpty(){
        return this.items.length===0;
    }
    getSize(){
        return this.items.length;
    }
}


const stack = new stack();
stack.push(10);
stack.push(20);
stack