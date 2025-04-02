//객체 값이니까 Number의 prototype을 상속 받아 사용 가능
const aa = new Number(123.45);

//암묵적으로 래퍼클래스 Number로 변경되었다가 다시 원시값으로 변경 됨 예시
//이후 가비지 스토리지로 취급되어 삭제처리
let bb = 123;
console.log(bb.toFixed(2));
let res = aa.toFixed(1);
console.log(res);
console.log(typeof res);

//isInteger의 경우 prototype이 아니라 정적함수로서 내장 되어있음.
console.log(Number.isInteger());

//래퍼 객체 wrapper 객체
