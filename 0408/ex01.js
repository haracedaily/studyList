const mySymbol1 = Symbol('내꺼');
const mySymbol2 = Symbol('니꺼');

console.log(mySymbol1==mySymbol2);
console.log(mySymbol1);
console.log(mySymbol2);

console.log(typeof mySymbol1);

const aa= {};
aa.aaa = 10;
console.log(aa);
String.prototype.aaa = 10;
let a = 'abcadefa';

a = a.replace(/a/g,'aaa');
console.log(a);
console.log(a.aaa);