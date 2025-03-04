//프로퍼티 어트리뷰트(가상화=추상적)
//접근자 프로퍼티 : __proto__ 사용가능
//내부 프로퍼티 [[Prototype]]은 사용 불가

const person = {
    name:"Lee"
}
person.age = 20;
console.log("=========");
//descriptors 내부슬롯 확인하려면
console.log(Object.getOwnPropertyDescriptors(person));
//[[Value]],[[Writable]],[[Enumerable]],[[Configurable]]
//writable == 값 변경 가능 //Value 변경 가능?
//Enumerable == for of 반복되는 구문으로 출력 가능 여부,  for in 이나 obejct key로 열거 가능 여부
//configurable == 삭제 가능 여부
console.log("=========");

console.log(Object.getOwnPropertyDescriptor(person,'name'));

console.log(person);
//데이터 프로퍼티 := 키와 값쌍으로 구성 된 프로퍼티
//접근자 프로퍼티 := get, set으로 구성하는 접근자 프로퍼티 Map
//console.log(map);

// Object.defineProperty(person,"greet",{
//     get(){
//         return ()=>`Hello, my name is ${this.name}`;
//     }
// });
Object.defineProperties(person,{
    lastName:{value:'d',writable:true,enumerable:true},
    firstName:{value:'d',writable:true},
    fullName:{value:function(){
        return `hi, my name is ${this.firstName} ${this.lastName}`;
    }}
})
person.lastName='JJ';
person.firstName='kim';
console.log(person);
console.log(person.fullName());
// console.log(person.greet());

const aa = {
    name:'홍길동',
    age:20,
    get nameAge(){
        return `name = ${this.name} age= ${this.age}`;
    },
    set nameAge(arg){
        this.name = arg.name;
        this.age = arg.age;
    }
};

console.log(aa);
console.log(aa.namgeAge);

person.nameAge = {name:'김길동',age:'30'};
console.log(person.nameAge);
console.log(person.name);
console.log(person.age);

//get 접근자명
//set 접근자명

const property1 = Object.getOwnPropertyDescriptor(person,'firstName');
console.log(property1);

const property2 = Object.getOwnPropertyDescriptor(aa,'nameAge');
console.log(property2);

//일반 객체의 프로퍼티는 접근자 프로퍼티
//함수의 프로퍼티는 데이터 프로퍼티
//example
const bb = {};
//bb.prototype 참조불가능
//bb.__proto__ 접근자 프로퍼티로 참조 가능

const bbb=function(){}
//bbb.prototype으로 참조 가능:=>프로토타입 체이닝이라고 프로토타입 재참조

