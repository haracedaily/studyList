function doPrint(name,age,gender,height,width){
    console.log(`name ${name}`);
    console.log(`age ${age}`);
    console.log(`gender ${gender}`);
    console.log(`height ${height}`);
    console.log(`width ${width}`);
}

doPrint("홍길동",20,"남자","180",'65');

const person={
    name:"홍길동",
    age:20,
    gender:"남자",
    height:180,
    width:60,
}
function doPrint2(person){
    console.log(`name ${person.name}`);
    console.log(`age ${person.age}`);
    console.log(`gender ${person.gender}`);
    console.log(`height ${person.height}`);
    console.log(`width ${person.width}`);
}
doPrint2(person);

class Person{
    constructor(name,age,gender,height,width){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.height=height;
        this.width=width;
    }
}
let hong = new Person("홍길동2",20,"남자","180",'65');
doPrint2(hong);