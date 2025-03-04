//this는 3가지 상황에 따라 다르다.
//1.일반함수로서 호출
//2.메서드로서 호출
//3. new 생성자 함수로 호출

function foo(){
    console.log(this);
}
//1일반함수로서 호출 ||global
foo();

const obj = {
    name:'홍길동',
    foo
};
obj.foo();

new foo();

//전역객체 globalthis적어도 안적어도 
// globalThis.setInterval(function(){
//     console.log('test');
// },1000);
// console.log(globalThis);


// var a = 10;
// console.log(a);
// console.log(window.a);

//브라우저에서는 전역객체 window
//node라는 백엔드 global
//생략가능한 전역에 객체를 가르키는 겁니다.

//globalThis => global,  window
//전역객체는 node globalThis
//전역객체 브라우저 window