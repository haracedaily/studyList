
console.time("for arr");

let sum = 0;
for(let i = 0; i<3000000;i++){
    sum=sum+i
}
console.timeEnd('for arr');


console.time("for arr test");

const arr = [];
for(let i = 0; i<3000000;i++){
    arr[i]=i;
}
console.timeEnd('for arr test');


console.time("for obj test");

const obj = {};
for(let i = 0; i<3000000;i++){
    obj[i]=i;
}
console.timeEnd('for obj test');
