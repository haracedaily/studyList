/* 
1. 중첩함수
2. 내부함수에서 외부함수에 있는 변수 참조
3. return 함수
렉시컬환경 == 정적 환경
 */

function outer(){
    var x = 0;
    return function inner(){
        console.log(++x);
    }
}

const out1 = outer();
out1();
out1();
out1();