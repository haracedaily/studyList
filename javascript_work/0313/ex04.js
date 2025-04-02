const person = {
    name:"홍길동",
    foo(callback){
        console.log(this);
        setTimeout(callback.bind(this),1000);
    }
}

//일반 함수 호출은 this가 전역 객체
person.foo(function(){console.log(this.name);});