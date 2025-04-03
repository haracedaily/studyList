class Users{
    constructor(users){
        this.users=users;
    }
    findById(id){
        return this.users.filter(el=>el.id==id);
    }
}

const myUsers = new Users([
    {id:1, name:"홍길동"},
    {id:2, name:"이길동"},
    {id:3, name:"박길동"},
]);
console.log(myUsers.findById(2));
console.log(myUsers);


const users = [
    {id:1, name:"홍길동"},
    {id:2, name:"이길동"},
    {id:3, name:"박길동"},
]
users.__proto__.findById = function(id){
    return this.filter(el=>el.id==id);
}

//1. 요소 추출
function findById(id){
    return users.filter(el=>el.id==id);
}
console.log(findById(3));
console.log(users.findById(2));
//2. 요소 제거
const userlist = users.filter(el=>el.id!=2);
console.log(userlist);
