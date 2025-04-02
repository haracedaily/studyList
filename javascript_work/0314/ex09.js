const counter = function (){
    let counter = 0;
    return function(callback){
        counter = callback(counter);
        return counter;
    }
};
const increase = function (num){
return ++num;
}
const decrease = function(num){
return --num;
}
let test = counter();
console.log(test(increase));
console.log(test(increase));
console.log(test(increase));
console.log(test(increase));