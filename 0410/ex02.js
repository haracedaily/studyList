console.log(...[1,2,3]);

console.log(..."hello");

//length 프로퍼티 없고
//symbol.iterator 없다
const obj = {a:1,b:2};
console.log(obj.a);
console.log(obj.b);

//map사용시
//length 프로퍼티 있고
//symbol.iterator 있다.
const map = new Map([
    ["a",1],
    ["b",2],
]);

console.log(map);
console.log(...map);
console.log('map에서 a로 '+map.get("a"));
console.log('map에서 b로 '+map.get("b"));


const set = new Set([1,2,3]);

console.log(set);
console.log(...set);

// console.log(...{a:1,b:2});
console.log({...{a:1,b:2}});

const t1 = {a:1,b:2};
const t2 = {a:3,b:4,c:5};
console.log({...t2,...t1,...{a:10}});