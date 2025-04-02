//super 키워드는 일반함수 function AA{} 에서는 없는 문법
//super , extends 키워드는 오직 class에서 사용가능함.
class Animal{
    constructor(age, weight){
        this.age = age;
        this.weight = weight;
    }
    getAge(){
        console.log(`parent = ${this.age}`);
    }
    getWeight(){
        return this.weight;
    }
}

class Bird extends Animal{
    constructor(name,flyable,age,weight){
        super(age,weight);
        this.name = name;
        this.flyable=flyable;
    }
    getAge(){
        console.log(`child = ${this.age}`);
        super.getAge();
        console.log(super.getWeight());
    }
}

const a = new Bird('hi','yes',20,10);
console.log(a);
a.getAge();
console.log(a.getWeight());