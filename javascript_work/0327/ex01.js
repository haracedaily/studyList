const arr = [1,2,3,4,5];

console.log(arr.slice(0,3));
console.log(arr.slice(2,4));

function doA(){
    console.log(...arguments);
    console.log(Array.prototype.slice.call(arguments));
    const result = [...arguments].map(item=>{
        console.log(item);
        console.log()
        return `<div>item = ${item}</div>`
    });

    // 화살표 함수에서 객체(=함수)가 리턴될때는 () 소괄호 사용
    const result1 = [...arguments].map((item,idx)=>(
        `<div>item = ${item}<div>`
    ))
    console.log(result);
    console.log(result1);
}


doA(1,2,3,4,5);