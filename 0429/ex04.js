
let a = 10;

function getPromise(){
return new Promise((resolve,reject)=>{
    if(a>0){
        resolve("정상적으로 실행되었습니다.");
    }else{
        reject("실패");
    }
});
}
setInterval(()=>{
    a*=-1;
    getPromise().then(res=>console.log(res)).catch(e=>console.log(e));},1000)
//Promis<pending>  Promise<resolve>        Promise<reject>
