const throttle = (func, delay) => {
    let timer;
    return function(...args) {
        if(timer) return;
        timer = setTimeout(() => {
            func(...args);
            timer = null;
    },delay);

}
}

const aa = throttle(()=>{console.log("hello")},100);
aa();
aa();
aa();
aa();
aa();
aa();
setTimeout(aa,101);
