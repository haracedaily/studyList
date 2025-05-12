const path = require("path");

console.log(path.join(__dirname,"b","c","d"));
//파일 업로드할 경우 사용하기도 함
console.log(path.extname("ex01.js"));//확장자
console.log(path.basename("ex01.js"));//전체
console.log(path.dirname("ex01.js"));//경로
console.log(path.parse("ex01.js"));

const {ext,name} = path.parse("ex01.js");

console.log(`${name+'-'+new Date().getTime()+ext}`);