//단방향 => 암호화 -> sha512방식  === hash

//양방향 => 암호와, 복호화

const crypto = require('crypto');

crypto.randomBytes(64,(err,buf)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(buf);
    console.log("buf.tostring : ",buf.toString());
    const key = buf.toString("base64");
    // console.log(key);//salt;

    crypto.pbkdf2('password',key,100000,64,'sha512',(err,key)=>{
        console.log('password : ', key.toString('base64'));
    })
})

