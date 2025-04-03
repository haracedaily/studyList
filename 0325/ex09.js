//생성자 함수는 첫글자 대문자
const Stack = function(){
function Stack(arr=[]){
    if(!Array.isArray(arr)){
        throw new TypeError(`${arr} is not an Array`);
    }
    this.arr = arr;
}
Stack.prototype={
    push(item){
        this.arr.push(item);
    },
    pop(){
        return this.arr.pop();
    },
    entries(){
        return [...this.arr];
    }
}
return Stack;
}();
const m = new Stack([1,2]);
console.log(m);
m.push(3);
console.log(m);
console.log(m.entries());
console.log(m);
