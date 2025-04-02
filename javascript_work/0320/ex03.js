class AA{
    #name
    constructor(name, age){
        this.#name  = name;
        this.age = age;
    }
    getname(){
        return this.#name;
    }
    get name(){
        return this.#name;
    }
    
}

const aa = new AA('홍길동',20);
console.log(`aa.age ${aa.age}`);
console.log(`aa.name ${aa.getname()}`);
console.log(`aa.name ${aa.name}`);