setImmediate(()=>{
    console.log("immediate");
})
process.nextTick(()=>{
    console.log("process.nextTick");
})
setTimeout(() => {
    console.log("setTimeout");
}, 0);
Promise.resolve('aa').then((data)=>{
    console.log("promise : "+data);
})
Promise.reject({name:"홍길동"}).catch((data)=>{
    console.log("promise reject : "+data.name);
})

/* 마이크로테스크큐는 일반 테스크큐보다 우선순위가 높다. */