function doA(){
    console.log(this);
}
doA();
const obj = {
    name:'디스디스',
    doA(){
        console.log(this.name);
    }
}
obj.doA();
obj['name'];
obj['doA']();
const arrow = () =>{
    console.log('상위스코프'+JSON.stringify(this));//window
}
arrow();

const obj2 = {
    name:'obj2',
    arrow : function(){
        (()=>{
            console.log('this'+JSON.stringify(this))
        })()
    }
}
obj2.arrow();