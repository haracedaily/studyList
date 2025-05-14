const http  = require("http");
const fs = require("fs");




http.createServer(async (req,res)=>{
    try{

    const password = "비밀";
    const indexHtml = await fs.promises.readFile("./index.html");
        /*
        fs에 promises사용
        fs.readFileSync("./index.html",'utf-8',(err,data)=>{
        if(err)throw err;
        return data;
    });*/
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.end(indexHtml);
    }catch (error) {
        res.writeHead(505,{'Content-Type':'text/plain; charset=utf-8'});
        res.end(error.message);
    }
}).listen(8080,'0.0.0.0',()=>{
    console.log("listening to port 8080");
})