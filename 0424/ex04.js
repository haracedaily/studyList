const person = {"name": "John", "age": 30, "city": "New York"};

const filter = function (key, value) {
    return typeof value === 'number' ? undefined : value;
}

const strubgFilter = function (key, value) {
    return typeof value === 'string' ? undefined : value;
}

console.log(typeof person);
console.log(JSON.stringify(person));
console.log(JSON.stringify(person, filter,2));
console.log(JSON.stringify(person, strubgFilter,2));