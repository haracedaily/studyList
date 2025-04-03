//javascript에서 프로토타입 생성 시점=>전역객체(window,global) 생성되는 시점
console.log(Object.prototype);
//Math,JSON,Reflect를 제외한 모든 빌트인 객체는 생성자 함수

const test = [];//Array.prototype

//Object.create() 부모를 직접 지정

var x = 10;
console.log(globalThis.x);
console.log(globalThis.Object);

//OrdinaryObjectcreat에 관하여
//어떤 방식으로 생성되던지 상관 없이 추상 연산 OrdinaryObjectCreate에 의해 생성된다
//필수적으로 자신이 생성할 객체의 prototype을 인수로 받는다.
//객체에 추가할 프로퍼티 목록을 옵션으로 전달
//Object.prototype의 내부슬롯에 입력하고 나서 객체를 반환한다