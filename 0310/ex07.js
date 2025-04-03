const person = {
    name:"홍길동",
    age :  30,
    addr:"대구"
}
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//Object => for in
//Array => for of

for(const key of Object.keys(person)){
    console.log(key);
}
for(const key of Object.values(person)){
    console.log(key);
}
let obj={};
for(const [key,value] of Object.entries(person)){
    console.log(`{${key}: ${value}}`);
    obj[key] = value;
}
console.log(obj);
const arr = [10,20,30];
const [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);

//디스트럭쳐링 배열분해, 객체 분해
const {aa,bb} = {aa:10,bb:20};
console.log(aa);
console.log(bb);