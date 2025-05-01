try { 
    setTimeout(()=>{throw new Error("에러발생")},1000);
}catch(e){
    console.error(e);
}

console.log("종료");