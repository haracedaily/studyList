
const myUsers = [
    {id:1, name:"홍길동"},
    {id:2, name:"이길동"},
    {id:3, name:"박길동"},
];

const result = myUsers.find(item => item.id==2);

console.log(result);