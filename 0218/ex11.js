function test(){
    console.log("시작");
    return;
    console.log("끝");
}

var a = 10;
var person = {name:"홍"};
console.log(a);
console.log(person);
test(a,person);

console.log(person);
console.log(a);