function doA(...arr){
    console.log(arr);

    return arr.reduce((a,b)=>{
        return a+b;
    },"")
}

console.log(doA([1,2,3,4,5]));