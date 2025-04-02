let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a는 그대로 유지)


console.log(10 === 10); // true
console.log(10 == '10'); // true
console.log(10 === '10'); // false
console.log('abc' === 'abc'); // true

let objA = { x: 10 };
let objB = { x: 10 };
let objC = objA;
objC.x=20;
console.log(objA);
console.log(objC);
console.log(objA === objB); // false, 서로 다른 참조이므로
console.log(objA === objC); // true, 서로 같은 참조이므로
console.log(objA === objA); // true, 같은 객체 참조
console.log(objA.x === objB.x); // true