const obj1 = {}
const obj2 = new Object();

console.log(obj1);
console.log(obj2);

function aa(){
    console.log(this);
}
const aa1 = new aa();
const aa2 = aa();
function createAry(a){
 this.name=a;
 return 'hi';
};