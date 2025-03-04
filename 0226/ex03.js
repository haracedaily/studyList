//function 의 경우 this가 전역 변수
function test(){
    this.aa=10;
}
test();
console.log(aa);

//생성자함수 호출 시 this 객체를 지칭함
//즉 글로벌엔 존재하지 않는다.
const test1 = new function(){
    this.bb=20;
}
console.log(test1.bb);
