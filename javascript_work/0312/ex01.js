const reg = /[a-b]+/;
console.log(reg.test('abc'));
console.log(reg.test('1020'));

console.log(typeof reg);

console.log(/^[A-Z]+$/.test("HELLO"));


/^[0-9]+$/.test();
/^\d+$/.test();