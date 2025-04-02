function FUNC(){
    console.log(new.target);
}
FUNC();//window, globalThis
const a = new FUNC();//Function
console.log(a);