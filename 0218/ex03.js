//모든 함수는 객체
//add {name:add}
//const a = {name:"홍길동"}
//a.age = 20;
//a{name:"홍길동",age:20}

function add(x,y){
    console.log(x,y);
}
console.log(add.name);
console.log(add.length);
add.xx=10;
console.log(add.xx);
console.dir(add);

var a = (aa)=>{
    console.log(aa);
};

a(10);