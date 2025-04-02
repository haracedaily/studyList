function outer(){
    let a = 0;
    return function(){
        a=a;
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("Done!"+(++a))
            }, 1000);
        })
        // return c?a++:a--;
    }
}
const out = outer();
const inner = await out();
console.log(inner);
console.log(inner);
console.log(inner);
console.log("?");