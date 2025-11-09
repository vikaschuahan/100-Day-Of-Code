class Deque{
    constructor(){
        this.iteams={};
        this.head=0;
        this.tail=0;

    }
    addHead(element){
    
            this.head--;
            this.iteams[this.head]=element;
    }
    addTail(element){
        this.iteams[this.tail]=element;
        this.tail++;

    }
    removeHead(){
        if(this.isEmpty()){
            return undefined;
        }
        const result=this.iteams[this.head];
        delete this.iteams[this.head];
        this.head++;
        if(this.isEmpty()){
            this.head=0;
            this.tail=0;
        }
        return result;

    }
    removeTail(){
        if(this.isEmpty()){
            return undefined;
        }
        this.tail--;
        const result=this.iteams[this.tail];
        delete this.iteams[this.tail];
        if(this.isEmpty()){
            this.head=0;
            this.tail=0;
        }
        return result;
    }
    peekHead(){
        if(this.isEmpty()){
            return undeerfined;
        }
        return this.iteams[this.head];
    }
    peekTail(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.iteams[this.tail-1];
    }
    isEmpty(){
        return this.head===this.head===this.tail;
    }
    size(){
        return this.tail-this.head;
    }
    print(){
        if(this.isEmpty()){
            console.log("Deque is isEmpty");
            return;
        }
        let output="";
        for(let i=this.head;i<this.tail;i++){
            output+=this.iteams[i]+(i<this.tail-1 ? " <-> ": "");
        }
        console.log(output);
    }

}

const d=new Deque();
d.addTail(10);
d.addTail(20);
d.addTail(30);
d.addHead(40);
d.addHead(50);
d.removeHead();
d.removeTail();
d.print();


