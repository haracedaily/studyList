const test = {
    name:'ccc'
}
const person = {
    name : "lee",
    getName(){
        return this.name;
    }
}
console.log(person.getName());

const test1 = person.getName;
//binding시키지 않을 경우 전역객체가 this에 바인딩 된다.
console.log(test1());//global, window에 name 존재 x
console.log(test1.call(test));

const a1Person = {
    name:'Kim'
};

a1Person.getName=person.getName;

console.log(a1Person.getName());