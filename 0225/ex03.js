const person = {};

Object.defineProperties(person,{
    firstName : {
        value:"Alice",
        writable:true,
        enumerable:true,
        configurable:true
    },
    lastName : {
        value:"Crown",
        writable:true,
        enumerable:false,
        configurable:false
    },
    fullName:{
        get(){
            return `${this.firstName} ${this.lastName}`;
        },
        set(fn){
            [this.firstName,this.lastName] = fn.split(' ');
        },
        enumerable:true,
        configurable:true
    }
});
console.log(person);
person.firstName='길동';
person.lastName='홍';
console.log(person);
delete person.firstName;
delete person.lastName;
console.log(person);
person.fullName='kong bob';
console.log(person.fullName);
for (const key in person) {
    console.log(key)    ;
}

//배열 객체 디스트럭쳐링;
const [a,b]=[10,20];//배열은 인덱스 기준 따라감
const {cc,dd,aa,bb} = {aa:20, bb:30, cc:function(){},dd:{}};//객체는 프로퍼티명칭 따라감

console.log(a);
console.log(bb);


//프로토타입 접근 방법
//객체는 a.__proto__
//함수는 fn.prototype