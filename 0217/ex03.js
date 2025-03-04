const name="홍길동";
const age = 20;

const person = {
    name,
    age
}

const person2 = {...person};

person.name="박길동";
console.log(person);
console.log(person2);
