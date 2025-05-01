const uniq = [1,3,3,5,5].filter((v,i,self) =>{
    console.log(self.indexOf(v));
    return self.indexOf(v)==i;
});

console.log(uniq);


console.log(new Set([1,3,3,5,5]));