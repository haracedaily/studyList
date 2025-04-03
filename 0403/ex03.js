// 원시타입이라 함수프로퍼티 변수프로퍼티 없음
const a = 'a,b,c';
console.log(a.split(','));//wrapper로 객체처럼 사용하고 다시 원시값으로 돌림
a.aa = 10;// a가 원시타입이어서 무시
a[0]='c';//무시
console.log(a);

console.log(Object.getOwnPropertyDescriptors(a));

//객체타입 함수프로퍼티 변수 프로퍼티 있음
const b = new String('a,b,c');
console.log(b.split(","));
b.aa = 10; //
console.log(b);