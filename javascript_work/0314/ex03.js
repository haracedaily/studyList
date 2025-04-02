/* 
1. 전역에서의 this
2. 일반함수에서의 this
일반모드
스트릭트 모드 => pacage.json type module 자동으로 strict 모드
3. 메서드에서의 this
4. 생성자에서의 this
*/
/* 
console.log(this);
 */
/* function aa(){
    console.log(this);
    console.log(this.crypto.randomUUID);
}

aa() */
/* 
const obj = {
    a:10,
    doA(){
        console.log(this);
        console.log(`a ${this.a}`);
    }
}
obj.doA(); */

function aaa(){
    console.log(this);
    this.name = '마이네임';
}

const a1 = new aaa();
console.log(a1);

class AA{
    constructor(){
        console.log(this);
        this.name="마이클래스네임";
        // return this; 생략된 문법?
        // return {a:10,b:20}; AA의 생성자가 아니어서 AA를 생성할수 없게 됨.
        return this;
    }
}
const a2 = new AA();
console.log(a2);