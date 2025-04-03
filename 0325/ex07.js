//push 원본배열 변경 o
//concat 원본배열 변경 x

const arr = [1,2,3];

arr.push(4);
console.log(arr);

const result = arr.concat(5);


console.log(arr);

console.log(`result = ${result}`);