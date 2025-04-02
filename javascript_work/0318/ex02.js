function Person(name,age){
    this.name = name;
    let _age = age;

    this.sayHi = function(){
        console.log(`this.name = ${this.name} _age ${_age}`);
    }

    this.setAge = function(age){
        if(age<0){
            console.log("적용불가");

        }else
        _age=age;
    }
}



const me = new Person("Lee",20);
me.sayHi();
me.setAge(-100);
const you  = new Person("Kim",30);
you.sayHi();

console.log(`me.name = ${me.name}`);
console.log(`me._age = ${me._age}`);