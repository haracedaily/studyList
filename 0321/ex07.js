const aa = (x,y)=>({x,y});

const result = aa(10,20);
console.log(result);

const arr = [10,20,30].map((item,index,arr)=>{
    console.log(`item=${item}`);
    console.log(`index=${index}`);
    console.log(`arr=${arr}`);
})