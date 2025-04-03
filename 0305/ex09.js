function aa(){};
//함수는 프로토타입 가지고 있음
console.log(aa.prototype);
const bb={};
//객체는 프로토타입 접근 안됨
console.log(bb.prototype);
console.log(bb.__proto__);