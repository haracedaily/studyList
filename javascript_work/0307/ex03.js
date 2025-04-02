//function Person(name){}
//Person.prototype소유하고 있다. -> constructor 생성자 있다.

const Person = name =>{
    this.name=name;
}

//Person.prototype 소유 하지 않고 있다. => constructor가 없다.

console.log(Person.prototype);