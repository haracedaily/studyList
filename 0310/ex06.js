const person = {
    name:"홍길동",
    age:30,
    addr:"대구"
}
console.log('name' in person);
console.log("age" in person);
console.log('addr' in person);

console.log('phone' in person);

console.log(Object.keys(person));
for (let f of Object.keys(person)){
    console.log(f);
}
//in은 프로젝트 타입체인 안에 있는 모든 프로퍼티 대상으로
//TF 체크합니다.
console.log('toString in Object.prototype');
console.log('toString' in Object.prototype);
console.log('toString in person');
console.log('toString' in person);

//하지만 for in에서 나오지 않는 이유는
//16장에서 배운 데이터 프로퍼티와 디스크립터로 확인해보면
//toString => enumerable false 처리되었기 때문입니다.
for(const key in person){
    console.log(key);
}

//데이터 프로퍼티 검사
//in Reflect.has Object.hasOwnProperty
