//객체보다 map이 성능이 조금 우세하다.
const obj = {
    aa:10,
}

const map = new Map();
map.set("aa",10);

console.log(obj);
console.log(map);

console.log(obj.aa);
console.log(map.get('aa'));

obj.bb=20;
obj.cc=()=>{};
map.set({aa:10},20);

console.log(obj);
console.log(map);

console.log(Object.keys(obj));
console.log(Object.keys(obj).length);
console.log(map.size);

// map은 symbol iterable이 되어 스프레드 되지만 객체는 이터러블이 지원되지 않아 불가
console.log(...map);
// 객체에 es2020에 추가 => stage4에서 제안
// 객체 => 객체
console.log({...obj});
obj.cc=30;
console.log(obj);
// console.log([...obj]); 불가
/* 맵은 이차원 배열로 생성해야한다.[[key,value],[key,value]] */