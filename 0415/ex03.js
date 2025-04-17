const map = new Map();
const key = {key:10};
const key2 = {key:10};
const key3 = {...key};

console.log(key === key2);
console.log(key === key3);

map.set(key,20);
console.log(map);

console.log(map.has(key));

map.delete(key);
console.log(map);

map.set(NaN,100);
console.log(map);
console.log(map.has(NaN));

map.clear();
console.log(map);