const Person = {
    fName : "홍",
    lName : "길동",
    get fulName(){
        return `fname ${this.fName} lname ${this.lName}`;
    }
}
console.log(Person);
console.log(Person.fulName);
