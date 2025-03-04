const obj = {
    age:20,
    name:'홍길동',
    get fullName(){
        return `이름 ${this.name} 나이 ${this.age}`;
    },
    set newAge(age){
        this.age = age;
    },
    set newName(name){
        this.name = name;
    }
}

console.log(obj.toLocaleString());
console.log(obj.hasOwnProperty('age'));
console.log(obj.hasOwnProperty('adfadf'));

//데이터 프로퍼티 age, name
//프로토 타입[object]
//__proto__ => __proto__ 최상단은 == null
// console.log(obj.name);
obj.newAge=10;
obj.newName='차차차';
// console.log(obj.name);
// console.log(Object.getOwnPropertyDescriptors(obj));
// console.log('========================')


//내부슬롯에 해당되는 [[prototype]]이 제공된다.
//내부슬롯 자체는 바로 접근 안된다.
function aa(num){
    console.log('test');
}

// console.log(Object.getOwnPropertyDescriptors(aa));
//__proto__는 함수의 프로퍼티가 아님 => function도 함수인데 아님주의
//Object의 접근자 프로퍼티
console.log(Object.prototype);//Object의 프로토타입도 객체이다.
//js 엔진이 제공해주는 내장 객체 Object{prototype:{get __proto__ }}
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));


//__proto__는 함수 객체 고유의 프로퍼티가 아니라 Object 객체 프로퍼티를 상속 받는다.
// 즉 Object.prototype은 모든 함수에서 사용 가능
// console.log(aa.length);
// console.log(aa.prototype);
// console.log(aa.__proto__);
//