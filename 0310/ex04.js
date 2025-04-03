function Person(name){
    this.name = name;
}

const me = new Person('Lee');

//Person.prototype이 me객체의 프로토타입 체인 상에 존재 유무
console.log(me instanceof Person);
console.log(me instanceof Function);
console.log(me instanceof Object);
console.log(Person instanceof Function);

const parent = {};

//프로토 타입 연결은 __proto__ 와 setPrototypeOf 두가지로 변경 가능
//me.__proto__ = parent;
Object.setPrototypeOf(me,parent);

//객체는 프로토타입을 명시적으로 접근이 불가해서 parent와 직접적으로 판단 불가
console.log(me instanceof Object);
console.log(me instanceof Person);
console.log(me.__proto__);

//prototype을 명시적으로 지정해 체이닝을 걸어주는 방식
//국내에선 선호 x 단지 권장하는 경우 o
let obj=Object.create(Object.prototype,{
x:{value:1,writable:true,enumerable:true,configurable:true},
});

