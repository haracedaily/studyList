const os  = require("os");
const path  = require("path");
const url  = require("url");
const fs  = require("fs");

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());

//path.join을 많이 사용함
//windows E:\pwa\node_work\ex0509\ex\index.js
//posix E:/pwq/node_work/ex0509/ex/index.js
console.log(path.join(__dirname,"ex","index.js"));
console.log(path.join("ex","index.js"));

const filename = path.join(__dirname,"ex","aa.js");
// const text = fs.readSync(filename);
console.log(filename)
// console.log(text);
/* console.log(path); */
