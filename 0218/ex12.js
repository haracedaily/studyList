function test(b,obj){
    b=20;
    obj.name="김";
    console.log("obj = ");
    console.log(obj);
    console.log(b);
    return a,obj;
}

//

let a = 10;
let person = {name:"홍"};
console.log(a);
console.log(person);
test(a,{...person});

console.log(person);
console.log(a);