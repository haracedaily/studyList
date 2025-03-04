//고차함수


const result1=[1,2,3].forEach((qwer,i,arr,q,w)=>{
    console.log("arrow function");
    console.log(`qwer=${qwer}`);
    console.log(`q=${q}`);
    console.log(`w=${w}`);
    console.log(`i=${i}`);
    console.log(`arr=${arr}`);
});

console.log(result1);

/*const result2= [1,2,3].map((qwer,i,arr,q,w)=>{
    console.log("arrow function map");
    console.log(`qwer = ${qwer}`);
    console.log(`q=${q}`);
    console.log(`w=${w}`);
    console.log(`i=${i}`);
    console.log(`arr=${arr}`);
    return qwer*2;
});*/
const result2= [1,2,3].map(qwer=>qwer*2);
console.log(result2);