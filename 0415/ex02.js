// map 키값이 같으면 덮어진다.
const map = new Map();
// map은 키와 값의 쌍으로 이루어짐
map.set('key1','value1');
map.set('key1','aaaa');

console.log(map); //override 된다.

// 속성 값이 같으면 덮어진다.
const obj = {aa:10};
obj.aa = 20;

//for of 구문은 Symbol.iterator가 구현되어져 있어야한다.
for (const element of map) {
    console.log(element);
}

map.forEach((value,key) => {
    console.log(`key ${key}`)
    console.log(`value ${value}`);
});

//for in 구문은 Symbol.
for (const key in obj) {
    console.log(obj[key]);
}