const child = {a:10};
const parent = { x: 1};
console.log(child.__proto__);
child.__proto__ = parent;
console.log(child.__proto__);
console.log(parent.__proto__);
console.log(child.x);
console.log(child);

//모든 객체는 object의 prototype을 가진다.

console.log(child.hasOwnProperty('x'));

console.log(Object.getOwnPropertyDescriptors(child.__proto__));


//prototype
//const arr = [] => Array.prototype -> Object.prototype
//const obj = {} => Object.prototype
//const obj2 = Object.create(null); -> prototype 없음
let test = Object.create();
console.log(Object.hasOwn(test));
console.log(!!Object.getPrototypeOf(test));
// console.log(test.hasOwnProperty()); Object.prototype과 연결x

let obj2 = {x:20};
obj2.__proto__.y=10;
console.log(obj2.__proto__);
console.log(Object.getPrototypeOf(obj2));
console.log(obj2.x);
console.log(obj2.y);