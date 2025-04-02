const regex = /\d+/g;


console.log(regex.test("123abc"));
console.log("123 abc 456 aa 567".match(regex));