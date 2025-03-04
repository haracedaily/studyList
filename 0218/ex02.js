/*

function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let max = denom1*denom2;
    let i = 1;
    while(i<max){
        if(i % denom1 == 0 && i % denom2 == 0){
            console.log(i);
            break;
        }
        i++;
    }

    return answer;
}
solution(1,2,3,4);
solution(10,20,5,10);
*/

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    // 8,9 = 72
    var max = denom1 * denom2;
    var 통분분모 = 2;

    // 1 <= 72

    while (통분분모 <= max) {

        if ( 통분분모 % denom1 == 0 && 통분분모 % denom2 == 0) {
            console.log(통분분모);
            break;
        }
        통분분모++;
    }

    return answer;
}

solution(1, 2, 3, 4);
