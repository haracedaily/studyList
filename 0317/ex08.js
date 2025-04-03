/* Reflect 객체 조작
get,set,deleteproperty등을 제공하는 내장객체
proxy와 함께 사용하면 더 강함
예외처리가 수월하다
*/
const user = {name:"홍길"};
Reflect.set(user,"age",30);
console.log(user);

//reflect.deleteProperty할 경우 Boolean 반환해줌
const target = {name:'Alice', age:25};

const proxy = new Proxy(target,{
    get(obj,prop){
        console.log(`속성 ${prop}를 읽음`)
        return obj[prop];
    }
});
console.log(proxy.name);