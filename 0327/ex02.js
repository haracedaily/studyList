const arr = Array.from({length:4},(el,idx)=>{
    console.log(`el = ${el}`);
    console.log(`idx = ${idx}`);
    return idx+1;
})

const arr2 = Array.from([1,2,3,4],(el,idx)=>{
    console.log(`el = ${el}`);
    console.log(`idx = ${idx}`);
    return 2;
})

console.log(arr);
console.log(arr2);
