class Queue{
    constructor(arr=[]){
        this.arr = arr;
    }


    //넣는거
    enque(item){
        return this.arr.push(item)
    }

    //빼는거
    deque(){
        return this.arr.shift()
    }

    //복사
    entries(){
        return [...this.arr]
    }
}

//스택 => push pop 즉 후입후출 형태
//큐 => push shift 즉 선입선출 형태
const que = new Queue([10,20,30]);

console.log(que);
que.enque(40);
console.log(que);
const retValue = que.deque();
console.log(retValue);
console.log(que);