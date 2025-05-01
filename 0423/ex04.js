function bb(callback,delay){
    let timerId;
    let count = 1;

    return (...args)=>{
        console.log(arguments);
        console.log(args);
        console.log('test');
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(callback,delay);
    }
}

const aa = bb(function(){
    console.log("함수보냄");
},300);
aa();
aa();
aa();
aa();
aa();
aa();
