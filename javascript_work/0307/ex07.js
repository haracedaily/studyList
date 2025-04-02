function AA(x){
    this.x = x;

}

AA.prototype = {
    cc(){
        console.log('난 cc')
    }
}

AA.prototype.bb=function(){
    console.log('난 bb');
}

const aa = new AA(20);
console.log(aa);
console.log(aa.x);

aa.bb();
aa.cc();
aa.bb();

AA.prototype.bb=function(){
    console.log('난 bb');
}

AA.prototype = {
    cc(){
        console.log('난 cc')
    }
}

aa.bb();
console.log(aa.__proto__.constructor);
const newAa=new AA(30);

newAa.cc();
//newAa.bb();