//instanceof 객체 비교
//함수 비교 연산자
function aa(){
    console.log(this instanceof aa);
}
function bb(){}
const dd= {};
console.log(aa instanceof dd);

const cc = new aa();

