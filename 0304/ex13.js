//접근자 프로퍼티 ==getter setter

const person = {
    fname:"홍",
    lname:"길동",
    get fullname(){
        return this.fname+this.lname;
    },
    set fullname(fullname){
        [this.fname,this.lname] = fullname.split(" ");
    }
}

console.log(person.fullname);
person.fullname="박 길동";
console.log(person.fullname);