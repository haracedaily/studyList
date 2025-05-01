new Promise((resolve)=>{resolve("정상")}).then(res=>{console.log(res);})
.finally(()=>{
    console.log("무조건실행");
});

new Promise((res,rej)=>{
    rej("err");
}).then(res=>console.log(res),e=>console.log(e))
.finally(()=>{
    console.log("무조건실행");
});


new Promise((res,rej)=>{
    rej("err");
})
.then(res=>console.log(res))
.catch(e=>console.log(e))
.finally(()=>{
    console.log("무조건실행");
});