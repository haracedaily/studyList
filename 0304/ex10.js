//렉시컬 스코프
//클로저
// 1. 외부변수 참조
// 2. 반환되는게 함수

const outerVar = "전역";
function outer(){
    let outerVar = "외부변수";
return function inner(){
    //inner 함수는 자신이 선언된 시점의 스코프 체인을 통해 outerVar에 접근
    console.log(outerVar += '!');
};
}

const out = outer();

out();
out();
out();
out();
out();

/* var outerVar = "전역";
function outer(){
    let outerVar = "외부변수";
    inner();
}

function inner(){
    //inner 함수는 자신이 선언된 시점의 스코프 체인을 통해 outerVar에 접근
    console.log(outerVar);
}

outer();
 */