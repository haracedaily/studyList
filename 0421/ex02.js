const obj = {a:10, b:20, c:30};
const map = new Map(Object.entries(obj));
console.log(map); // Map(3) { 'a' => 10, 'b' => 20, 'c' => 30 }
const obj2 = Object.fromEntries(map);
console.log(obj2); // { a: 10, b: 20, c: 30 }
// Map은 순서가 보장된다. Set은 순서가 보장되지 않는다. 