const foo = function(){
    return 1;
}

console.log(foo());
console.log(new foo());
console.log(foo.toString());

//일반함수 es5
const obj = {foo:function(){return 2}};
console.log(obj.foo());

//메서드 축약함수 es6
const obj1 = {foo(){return 2}};
console.log(obj1.foo());

//화살표 함수 es6
const obj2 = {foo:()=>{return 2}};
console.log(obj2.foo());

//none-constructor
//new obj2.foo();