const obj = {name:"Alice"};

//기본적으로 프로퍼티 어트리뷰트를 확인할 수 있음
const descriptor = Object.getOwnPropertyDescriptor(obj,"name");

/* 출력결과
{
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
  } */
console.log(descriptor);
Object.defineProperty(obj,"age",{
    value:20,
    writable:true,
    enumerable:true,
    configurable:false
})
delete obj.age;
console.log(obj);
// delete obj.age;
// obj.age=20;
// const descriptors = Object.getOwnPropertyDescriptors(obj);
// console.log(descriptors);
// console.log(Object.keys(obj));
// for(const key in obj){
//     console.log(`key ${key}`);
// }