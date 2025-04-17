const obj = {a:10,b:20};
const copy = {...obj};

obj.a=30;
console.log(obj);
console.log(copy);