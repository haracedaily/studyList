function Person(name){
this.name = name;
}

Person.prototype.sayHello=function(){
    console.log(`나는 프로토타입 hello ${this.name}`);
}

const me = new Person('nap');

me.sayHello=function(){
    console.log(`나는 인스턴스 sayHello ${this.name}`);
}

me.sayHello();