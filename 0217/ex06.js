const f = function add(x,y){
    return x+y;
}

const res = f(10,20);
console.log(res);

//익명함수 즉시 호출
const res1 = (function (x,y){
    console.log(x);
    console.log(y);
    return x-y;
})(10,20);

console.log(res1);