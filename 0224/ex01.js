// c -> javascript

//함수 선언 변수 선언 
//선언 먼저 하고 실행문
//자바스크립트는 함수 호이스팅으로 인해 되지만 표현식으로 전개 시 호이스팅이 일어나지 않음.
//변수는 선언 자체만 호이스팅 되기 때문 || 내용 x
//doA(); => undefined
const doA = function doA(){
    console.log("test");
}
//이런 방식으로 선언하길 권장한다. 하지만 잘 안썼음.. 현장 상황에 따라 유동적으로 사용하기
doA();

//즉시 호출 함수 표현식 (함수 선언)();
(function(arg){
    console.log(arguments[0]);//{'0':10,'1':20}
    console.log('test2');
})(10,20);

//arrow function

//recursive function 재귀함수
function factorial(n){
    if(n<=1) return 1;
    return n* factorial(n-1);
}
console.log(factorial(3));

function doB(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const counter = doB();
console.log(counter());
counter();
const value = counter();

console.log(value);
console.log(counter());
console.log(counter());
console.log(counter());
//실행컨텍스트 -> 렉시컬스코프(정적의 유효범위)
//소스 실행 순서를 만드는 곳(실행 컨텍스트);
//자바스크립트 엔진(소스를 먼저 읽어서)이 실행컨텍스트를 만들고 소스를 실행하게 된다.
//클로저(다중 생성 가능)=>24장에 나옴
