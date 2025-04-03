class Animal{
    constructor(){
        console.log('Animal');
    }
}

class Dog extends Animal{
    constructor(){
        super();//constructor 작성시 생략 불가
        console.log("Dog");
    }
}

const dog = new Dog();
console.log(dog);