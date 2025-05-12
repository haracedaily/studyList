const crypto = require('crypto');
const util = require('util');

// crypto.randomBytes(64,(err,buf)=>{
//     const key = buf.toString("base64");
//     console.log('key1 : ',key);
// })

// const aa = util.promisify(crypto.randomBytes);
// aa(64).then((buf)=>{
//     const key  = buf.toString("base64");
//     console.log('key2 : ',key);
// })

const myFunc = function(aa,bb,callback){
    console.log(aa,bb);
    setTimeout(()=>{
        callback();
    },1000);
}

myFunc(1,2,()=>{
    console.log('result');
})

const myFuncPromi  = util.promisify(myFunc);

myFuncPromi(1,2).then(result =>{
   
})