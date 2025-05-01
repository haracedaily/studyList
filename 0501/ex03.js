const infiniteFibonacci = (function(){
    let [pre,cur] = [0,1];

    return {
        [Symbol.iterator](){return this;},
     next(){
        [pre,cur] = [cur,pre+cur];

        return { value:cur};
     }   
    }
})();

console.log(infiniteFibonacci);
console.log(infiniteFibonacci.next());
console.log(infiniteFibonacci.next());
console.log(infiniteFibonacci.next());
console.log(infiniteFibonacci.next());

for(const num of infiniteFibonacci){
    console.log(num);
    if(num<10000){
        console.log(num);
    }else break;
}