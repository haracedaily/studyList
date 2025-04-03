function Person(name,age){
    this.name = name;
    this.age = age;
}
// console.log(Person.prototype);
//Person 의 프로토타입에 의사 메서드 추가
Object.defineProperty(Person.prototype,"greet",{
    get(){
        return ()=>`Hello my name is ${this. name}`;
    }
})

// console.log(Person.prototype);
// console.dir(Person.__proto__);
// console.log(Person);
// const p = new Person("Emma");
// console.log(p.greet());
function aa(){

};
const person1 = new Person("홍길동",20);
console.log(person1);
const person2 = new Person("박길동",20);
console.log(person2);
const person3 = new Person("이길동",20);

console.log(person1 instanceof Person);
console.log(person1 instanceof aa);

function test(){}//[[call]][[construct]]
test();//[[call]] 함수 호출 가능
new test();//[[construct]]가 있으면 new 예약자로 객체 생성가능

