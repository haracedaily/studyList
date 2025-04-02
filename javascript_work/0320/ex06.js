class AA{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}

class BB extends AA{
    //묵시적으로 super()의 constructor를 사용가능
    //만약 constructor를 선언한다면 무조건 super 호출하여 구성해야한다.
    constructor(...restArgs){
        super(...restArgs);
        /* console.log(restArgs);
        console.log(arguments); */
    }
}

const me = new BB(10,20);
console.log(me);

