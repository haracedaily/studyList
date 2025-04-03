class AA{
    // super X constructor O prototype O arguments O
    doA=function(){
        console.log("일반함수")
    }
    //super O constructor X prototype X arguments O
    doB(){
        console.log("메서드 축약")
        console.log(this);
    }
    //super X constructor X prototype X arguments X
    doC = ()=>{
        console.log("화살표함수")
    }
}

const aa = new AA();
aa.doA();
aa.doB();
aa.doC();
console.log(new aa.doA());

// none constructor
// console.log(new aa.doB());
// console.log(new aa.doC());