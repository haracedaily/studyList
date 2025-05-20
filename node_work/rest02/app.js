const express = require("express");
const app = express();

app.set("port", 3000);
app.get("/", (req, res) => {
    res.send("hello get");
});
app.post('/',(req,res)=>{
    res.send("hello post");
});
app.put('/',(req,res)=>{
    res.send("hello put");
});
app.delete('/',(req,res)=>{
    res.send("hello delete");
})
app.listen(8080, () => {
    console.log("server is running on port 8080");
})
// app.listen(app.get("port"), () => { 포트 두개 연동 가능
//     console.log("server is running on port 3000");
//     console.log('is it possible?');
// })
