const arr = [1,2,3,4,5];
let res = arr.reduce((a,b,idx,ary)=>a+b,0);
let result = arr.reduce((a,b,idx,ary)=>{
    console.log(`a = ${a} b = ${b} index = ${idx} values = ${ary}`)
    return b;
});

console.log(res);
console.log(result);

