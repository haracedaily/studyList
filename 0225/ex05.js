const obj = new Object();

obj.name = '홍길동';

obj.sayHello = function(){
    console.log(`hi my name is ${this.name}`);
}

console.log(obj.name);
obj.sayHello();


//객체 리터럴 const obj = {};
//생성자 함수 const obj = new Object();