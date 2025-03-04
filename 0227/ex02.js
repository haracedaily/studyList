function aa(name,age){
    this.name = name;
    this.age = age;
    console.log("호출");
    //this를 리턴 못함
    //빈객체 {} 리턴
    //return {};
    return this;
}

const temp = aa();
const temp2 = new aa("홍길동",20);
console.log(temp);
console.log(temp2);

//객체에서 데이터 프로퍼티
//name age
//접근자 프로퍼티
//get set
//내부슬롯 내부메서드 직접적으로 호출불가
//[[prototype]]
console.log(`aa.constructor = ${aa.constructor}`);

const bb = () =>{};
console.log(bb.constructor);
console.log(bb.__proto__.constructor);