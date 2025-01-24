class test{
    constructor(a,b){
        this.a=a,
        this.b=b
    }
    getSum(){
        return this.a+this.b;
    }
}

class user{
    constructor(a,b){
        this.id=a,
        this.name=b
    }
}


main();
function main(){
    let output = new test(5,6);
    console.log(output.getSum());
    let user1 = new user(1,'Lee');
    console.log(user1.id);
    console.log(user1.name);
    let user2 = new user(2,'Kim');
    let users = [user1,user2];
    console.log(users);
}
