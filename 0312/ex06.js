/* 
1.aa(); //this는 전역객체
//strict 모드면 this는 undefined로 할당된다.
2.new aa(); //this {} 생성하는 객체
3.person.aa(); // person->this
4.<tr onclick='aaa(this)'></tr> => this는 trtag 자신이 됨
5.arrow function => this는 상위요소 호출.
6.Function.prototype.apply/call/bind로 간접 호출 가능
ex) foo.call(객체); foo.apply(객체); foo.bind(객체)();
*/

//문법을 엄격하게 검사하는 기법
'use strict';

function AA(name){
    // this.name = name;
    console.log(this);
}

AA();

new AA();

const aa = {
    name:"LEE",
    getThis(){
        console.log(this);
    }
}

aa.getThis();

const bb = aa.getThis;
bb();