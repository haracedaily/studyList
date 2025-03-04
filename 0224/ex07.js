const person = {};

person.fName = "박";
Object.defineProperty(person,"lName",{
    value:'길동',
    writable:true,
    enumerable:false,
    configurable:true
})
Object.defineProperty(person,"age",{
    value:20
})

const propertys=Object.getOwnPropertyDescriptors(person);
console.log(person);
console.log(person.age);
console.log(propertys);

for(const key in person){
    console.log(key);
}
