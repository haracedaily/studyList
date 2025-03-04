//함수도 객체임으로 프로퍼티 set과 method call 가능하다.
//함수 객체는 일반객체가 가지고 있는 모든 것을 가지고 있다.

function foo(){};
foo.aa = 10;
foo.doA = function(){
    console.log(this.aa);
}

foo.doA();

Object.call(foo.doA());