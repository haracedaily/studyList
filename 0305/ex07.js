//rest 파라미터
function sum(...arg){
    console.log(arg);
}
sum(1,2,3);

function bar(func){
    return func();
}

function foo(){
    return `caller ${foo.caller}`
}

console.log(bar(foo));
console.log('=========================')
console.log(foo());