function deepFreeze(target){
    console.log(target);
    console.log('타겟');
    //target이 객체이고 동결되지 않은 객체만 동결한다.
    if(target && typeof target == "object" && !Object.isFrozen(target)){
        console.log('깊은동결 발동');
        Object.freeze(target);
        Object.keys(target).forEach(key =>{
            deepFreeze(target[key]);
        });
    }
    // return target;
}

const person = {name:"lee",addr:{city:'seoul'},friends:[{name:'Park',addr:{city:'busan'}}]};
person.age = 20;
console.log(person);
deepFreeze(person);
person.addr.city='kang';
console.log(`after DeepFreeze person=${person.addr.city}`);

//추가 x 삭제o 프로퍼티값 변경 o
//extensible false
// Object.preventExtensions(person);
// person.gender='남';
// console.log(person);
// console.log(Object.isExtensible(person));

//extensible,configurable false
// Object.seal(person);//추가x 삭제x

//extensible,writable,configurable false
// console.log(Object.getOwnPropertyDescriptors(person));
Object.freeze(person);//추가x 삭제x 변경x

//freeze ==> 얕은 동결 := 객체 내의 객체값은 변경 가능
person.addr.city='busan';
console.log(person);

//얕은동결이라 수동적으로 명명해줘야한다.
Object.freeze(person.addr);



const keys = Object.keys(person);
console.log(keys);