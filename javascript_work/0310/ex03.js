class AA{
    constructor() {
        this.a = 1;
        console.log("test");
    }
    sayHi(){
        console.log("sayHi");
    }
    bye(){
        console.log("bye");
        this.a = 2;
    }
}

const aa = new AA();
aa.sayHi();
console.log(aa.a);
aa.bye();
console.log(aa.a);