function test(){
    setTimeout(()=>{
        console.log("test");
    },1000);
}

test();
console.log("종료되었습니다.");

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('222');
    },1000);
})
promise.then(res=>console.log(res));