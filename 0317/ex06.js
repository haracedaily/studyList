
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Done!');
    },1000);
})
// await promise.then(res=>console.log(res));
/* const ret = await promise;
console.log(ret); */
console.log("?");

// promise 객체
// const res = await supabase.storage.from('ex01').upload();
