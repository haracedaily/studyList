//Object.create(bar.prototype) == new bar();

const obj = {
    // [[call]]
    foo(){console.log(this)},
    
    //[[call]]
    arrow : ()=>{console.log(this);},
    
    //생성자함수 사용가능 [[constructor]]라는 내부슬롯 보여중 [[call]]
    //constructor 생성자 호출 시 prototype(개발자 수정가능) 가지고 생성
    bar : function(){console.log(this)}, 
    
    //[[constructor]],[[call]] 둘다 없음
    test:{},
}
console.log(obj.foo.hasOwnProperty('prototype'));
console.log(obj.arrow.hasOwnProperty('prototype'));
console.log(obj.bar.hasOwnProperty('prototype'));

// obj.arrow(); this를 외부 바인딩함
obj.bar();
obj.foo();
new obj.bar();
//사용불가 contructor 없음
// new obj.foo();
// new obj.arrow();
// new obj.test();
