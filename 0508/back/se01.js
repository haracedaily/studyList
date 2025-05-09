const http = require("http");

http.createServer((req,res)=>{
    console.log("통신형");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    console.log(req.method);
    //preflight 크롬에서 먼저 보내봄 OPTIONS방식으로, 통신 성공시 POST 방식으로 통신
    //OPTIONS
    if(req.method==="OPTIONS"){
        res.writeHead('204');
        res.end();
        return;
    }
    if(req.method === "GET")
    res.end('return value');
else if(req.method==="POST"){
    const objData = {};
req.on('data',chuck=>{
    const input = chuck.toString();
    const match = input.match(/name="name"\r?\n\r?\n([\s\S]*?)\r?\n/);
if (match) {
  console.log(match[1]); // "김길동"
} else {
  console.log("값을 찾을 수 없습니다.");
}
    console.log(chuck);
    console.log(chuck.toString());
    objData.chuck = chuck.toString();
    try{
        const datajson = JSON.parse(chuck.toString());
        console.log(datajson.name);
        console.log(datajson.age);
    }catch(e){
        // console.log(e);
    }
    console.log(objData);
});
11112+11
    res.end("supabase 데이터베이스에 저장함");
}
}).listen(8005,()=>{
    console.log("server 시작");
})