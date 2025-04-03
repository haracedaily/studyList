//'use strict'

function foo(){
    x=10;//선언하지 않아도 자동으로 전역 선언.
}

foo();
console.log(x);