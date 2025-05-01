async function foo(){
    const a = new Promise((resolve,reject)=>resolve("chk a"));
    const b = new Promise((resolve,reject)=>resolve("chk a"));
    const c = new Promise((resolve,reject)=>resolve("chk a"));
    console.log([a,b,c]);
    console.log(await Promise.all([a,b,c]));
}

foo();