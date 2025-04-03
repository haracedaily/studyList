const obj = {
    aa:function(){},
    bb(){},
    cc:()=>{}
}

new obj.aa();
// new obj.bb(); //사용 불가
// new obj.cc(); //사용 불가
console.log(obj.aa.hasOwnProperty('prototype'))
console.log(obj.bb.hasOwnProperty('prototype'))
console.log(obj.cc.hasOwnProperty('prototype'))