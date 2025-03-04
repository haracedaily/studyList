var a = [1,2,3];

//1,2,3출력해라
//for구문으로 ...
a.map(el=>console.log(el));
a.filter(el=>console.log(el));
console.log('reduce');
a.reduce((a,b,c) => {if(!!a)console.log(a);console.log(b);});
for (var i =0; i<a.length; i++){
    console.log(a[i]);
}

a.forEach((el)=>{console.log(el)});
a.forEach(function(el){console.log(el)});
[1,2,3].forEach(()=>{
    console.log("arrow function");
});
[...a].forEach((el)=>{
    console.log("arrow function with spread operator")
});
a.sort((a,b) => {return b-a});
console.log(a);
