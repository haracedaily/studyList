const user = {
    name : '홍길동',
    addr : {
        zipcode:101,
        city:'daegu',
    },
};

const {addr:{city},name,addr} = user;
console.log(city);
console.log(addr);
console.log(name);




