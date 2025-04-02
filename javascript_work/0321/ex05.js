const base = {
    sayHi(){
        console.log("base sahi 함수");
    }
}

const derived = {
    __proto__ : base,
    sayHi(){
        super.sayHi();
        console.log('derived sayHi 함수');
    },
    //arrow function, 일반 함수는 super 사용 불가
    arrow:()=>{
        // super.sayHi();
    },
    general:function(){
        // super.sayHi();
    }
}

derived.sayHi();

derived.arrow();

derived.general();