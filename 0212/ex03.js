function test(str){
    // str = str || '';
    return !!str?str.length:0;
}

const value = test();
const value1 = test('hi');

console.log(value);
console.log(value1);

//ES6 버전
function test2(str = ''){
    return str.length;
}
console.log(test2());