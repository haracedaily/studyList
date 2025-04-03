class Person{
    age = 10;//프로퍼티는 외부에서도 선언 가능해졌다.
    constructor(name){
        //this = {}
        this.name = name;
        //{name:"Lee"}
        //return this; default로 반환처리됨 명시적으로 원시값 반환시 무시하고 default로 처리
        // return {}; object 반환시 default반환처리가 무시됨
        // return []; array 마찬가지
        // return function(){} function 마찬가지 원시값만 무시 처리 됨
    }
}

const me = new Person("Lee");
console.log(me);
me.age=20;
console.log(me);