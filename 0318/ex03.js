// # <- Person 클래스 내부에서만 사용 가능
// # 외부에서는 접근 불가 바로 에러처리
// 캡슐화 정보은닉 es2022
class Person{
    #age;//접근이 허용되지 않음
    constructor(name,age){
        this.name = name;
        this.#age = age;
    }
    sayHi(){
        console.log(`this.name ${this.name} this.#age ${this.#age}`);
    }
}

const me = new Person("Lee",30);
me.sayHi();
console.log(me.name);
//console.log(me.#age); 접근불가 에러발생 클래스내부에서 닫혔다. private