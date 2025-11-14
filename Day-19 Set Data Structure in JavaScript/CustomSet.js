 class CustomeSet{
    Constructor(){
        this.iteam= new Map();

    }
    add(element){
        if(this.iteams.has(element)){
            return false;
        }
        this.iteams.set(element,element);
        return true;
        }

        has(element){
            return this.iteams.has(element);
        }
        remove(element){
            return this.iteams.delete(element);
        }
        size(){
            return  this.iteams.size;

        }
        values(){
            return[...this.iteams.keys()];

        }
        union(otherSet){
            const unionSet=new CustomeSet();
            this.values().forEach(value => unionSet.add(value));

            otherSet.value.forEach(value => unionSet.add
                (value));
                return unionSet;
        }

        IntersectionObserver(otherSet){
            const intersectionSet=new CustomeSet();
            
            const samllerSet=this.size() <otherSet.size()?
            this:otherSet;
            const largerSet=this.size() <otherSet.size()?
            otherSet:this;


            samllerSet.value().forEach(value =>{
                if(largerSet.has(value)){
                    intersectionSet.add(value);
                }
            });
            return intersectionSet;
        }
 }

const setA=new CustomeSet();
setA.add(2);
setA.add(4);
setA.add(6);
setA.add(8);
setA.add(10);
const setB=new CustomeSet();
setB.add(1);
setB.add(4);
setB.add(7);
setB.add(8);
console.log(setA);
console.log(SetB);

setC=setA.union(setB);
console.log(setC);
setD=setA.intersection(setB);
console.log(setD);

setA.remove(2);
console.log(setA);


