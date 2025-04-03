const obj1 = {
    name:"Bob",
    sayHi: function(){
        setTimeout(function(){
            console.log(this.name);
        }.bind(this),1000);
    }
}

const obj2 = {
    name:"bob",
    sayHi:function(){
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}

obj1.sayHi();
obj2.sayHi();

console.log("여기는 계속 실행");