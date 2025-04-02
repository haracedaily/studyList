let a = [0,1,10,3,4,1].reduce((a,b)=>{a[b]=a[b]!=undefined?a[b]+1:1;
    return a;
},{});

console.log(a);