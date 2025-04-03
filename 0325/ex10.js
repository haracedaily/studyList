class Stack{
    #arr;
    constructor(arr=[]){
        if(!Array.isArray(arr)){
            throw new TypeError(`${arr} is not an Array`);
        }
        this.#arr=arr;
    }
    push(item){
        this.#arr.push(item);
    }
    pop(){
        this.#arr.pop();
    }
    entries(){
        return [...this.#arr];
    }

}

const m = new Stack([1,2,3,4]);
console.log(m);

m.push(5);
console.log(m);
console.log(m.entries());

m.pop();
console.log(m);
console.log(m.entries());