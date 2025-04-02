function foo(){
    this.a=10;
    this.b=20;
    console.log(this);
}
const ccc = {
c:30,
};

const obj = { foo , c:50};
obj.foo();
// foo();
// new foo();

//this를 빈객체로 할당(=바인딩)
//this를 강제로 변경해서 함수 호출 가능
foo.apply({c:'새로운 내용'});
foo.call({d:'call'});
//bind는 즉시 호출되지 않는 함수임.
foo.bind({e:'this변경'})();
foo.call(ccc);
foo.apply(ccc);

//foo(); 의 경우 전역객체로 되니까 강제로 변경