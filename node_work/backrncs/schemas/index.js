const mongoose = require('mongoose');

const {MONGO_PASSWORD, MONGO_URL,MONGO_HEADER} = process.env;
mongo_url= MONGO_HEADER+MONGO_PASSWORD+MONGO_URL;
const connect = () =>{
    mongoose.connect(mongo_url,{dbName:"test"})
    .then(() => {
        console.log("MongoDB 연결 성공");
    })
    .catch((error) => {
        console.error("MongoDB 연결 실패:", error);
    });
}

mongoose.connection.on('error',(error)=>{
    console.log("MongoDB 연결 에러 : ",error);
})

mongoose.connection.on('disconnected',()=>{
    console.log("MongoDB 연결이 끊어졌습니다. 재연결 시도 중...");
    connect();
});

module.exports=connect;