const mydate = new Date ('2025/04/01');
console.log(mydate);

console.log(mydate.toLocaleTimeString());
console.log(mydate.toLocaleTimeString('ko-kr'));
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleDateString('ko-kr'));
console.log(mydate.toDateString('ko-kr'));
console.log(mydate.toDateString());
console.log(mydate.toJSON());

setInterval(()=>{
    console.log(Date.UTC());
    
},100);