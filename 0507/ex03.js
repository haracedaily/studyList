const obj = {
    a:10,
    //정적 추가
    b:function(){//new 생성 가능
        console.log("test");
    },
    c(){//new 생성 불가
        console.log("ccc");
    }
}

obj['asdf']='Asdf';//동적 추가

console.log(obj.a);
obj.b();
obj.c();

console.log(obj.asdf);