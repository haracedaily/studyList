//콜백함수 :=> 매개변수로 함수가 오는 것

function doArr(arr,callback){
    console.log(arr);
    console.log(callback);
    arr.forEach(item =>{
        callback(item);
    })
    callback(10);
}
doArr([1,2,3],function(item){console.log("test "+item)});

//기본 매개변수와 rest 매개변수

//기본 매개변수
function greetWithDefault(name = "Guest"){
    return `Hello, ${name}!`;
}
console.log(greetWithDefault());//Hello,Guest!
console.log(greetWithDefault('Bob'));//Hello,Bob!

//rest 매개변수
function sum(...numbers){
    console.log(numbers);
    const ret = numbers.reduce((a,b,c,d)=>{
        console.log(`a = ${a}`);
        console.log(`b = ${b}`);
        console.log(`c = ${c}`);
        console.log(`d = ${d}`);
        return a+b;
    },0)
    return ret;
}
const value = sum(1,2,3,4,5);
console.log(value);
