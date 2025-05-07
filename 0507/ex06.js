class Human{
    //new 연산자 사용해서 객체 생성시 호출
    constructor(type="human"){
        this.type = type;
    }

    //정적 메서드인 isHuman은 객체 생성하지 않고 사용
static isHuman(human){
    console.log("인간이다"+human)
}
//내부 메서드 prototype
//객체 생성하면 prototype 체인룰에서 생성
//객체 생성해서 사용
    breathe(){
        alert("습하아~");
    }
}

const human = new Human();

console.dir(human);
console.log(human.type);
Human.isHuman(human);