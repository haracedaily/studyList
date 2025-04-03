function test(){
    // const value = arguments.slice(0,2);
    const aa =  [...arguments];
    const value = aa.slice(0,2);
    console.log(aa);
}
test(10,20,30); //함수 호출
Function.prototype.call(test);
// test.call(); //함수 호출 됨
// test.apply(); //함수 호출 됨
// test.bind();