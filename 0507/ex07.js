let test = true;

new Promise((res,rej)=>{
    if(test)
    res("success");
else
    rej("fail");
}).then(res=>console.log(res)).catch(err=>console.log(err));

const promise = new Promise((res,rej)=>{
    if(test)
        rej('fail');
})

promise.then(res=>console.log(res)).catch(err=>console.log(err));