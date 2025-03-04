//객체 리턴은 소괄호 안에 객체로 보내야함 문법상 중괄호는 이미 정해진 값
const aa = ()=>({0:'홍길동',age:20});
console.log(aa);
console.log(aa());

//변수의 쉐도잉

//내부 스코프에서 변수 선언 시 외부 스코프를 가림

let x = 5;

function aaa(){
    let x = 10;
    return x;
}

console.log(aaa());
console.log(x);

//변수 호이스팅
//var는 전역 선언
if(true){
    //msg 변수는 유효범위가 if 구문 안이기 때문에 안된다. var의 경우는 된다(=전역으로 선언되기 때문)
    let msg = "msgmsg";
    console.log(msg);
}
console.log(msg);