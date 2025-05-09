let i = 1;
setInterval(()=>{
if(i==5){
    process.exit();
    
}
console.log(i++);
},100)

console.log('비동기함수');

//buffer를 문자열로 내장객체