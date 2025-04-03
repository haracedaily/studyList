const arr = [10,20,30,40];

const result = arr.splice(2,0,100,200,300);

console.log(arr);
console.log(result);

//자바스크립트에서 스택과 큐를 유사한 구조로 실행하는 방법 혹은 스택과 큐에 대한 설명
//그리고 배열에서 특정 인덱스에 값 삽입하거나 0인덱스 끝 인덱스에 값 삽입 및 제거
let result2 = [];
result2.push(0.20)
result2.push(0.22)
result2.push(0.14)
result2.push(0.21)
result2.push(0.19)
result2.push(0.18)
result2.push(0.20)
result2.push(0.65)
result2.push(0.76)
result2.push(0.16)
result2.push(0.13)
result2.push(0.24)
result2.push(0.07)
console.log(result2.reduce((a,b)=>a+b)/13)
let result3 = [];
result3.push(0.21)
result3.push(0.20)
result3.push(0.12)
result3.push(0.19)
result3.push(0.19)
result3.push(0.22)
result3.push(0.19)
result3.push(0.51)
result3.push(0.69)
result3.push(0.12)
result3.push(0.10)
result3.push(0.79)
result3.push(0.08)
console.log(result3.reduce((a,b)=>a+b)/13)

result3=[];
result3.push(0.21)
result3.push(0.20)
result3.push(0.14)
result3.push(0.32)
result3.push(0.21)
result3.push(0.20)
result3.push(0.20)
result3.push(0.52)
result3.push(0.69)
result3.push(0.22)
result3.push(0.15)
result3.push(0.21)
result3.push(0.12)
console.log(result3.reduce((a,b)=>a+b)/13)
result3=[];
result3.push(0.19)
result3.push(0.17)
result3.push(0.11)
result3.push(0.18)
result3.push(0.18)
result3.push(0.17)
result3.push(0.17)
result3.push(0.42)
result3.push(0.56)
result3.push(0.11)
result3.push(0.09)
result3.push(0.22)
result3.push(0.20)
console.log(result3.reduce((a,b)=>a+b)/13)