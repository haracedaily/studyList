// 교집합
const A = new Set([1,2,3,4]);
const B = new Set([3,4,5,6]);

// filter 반환되는 값을 배열로 반환
const res = [...A].filter(x => B.has(x));
console.log(res); // [3, 4]

// 합집합
const union = new Set([...A, ...B]);
console.log([...union]); // Set(6) { 1, 2, 3, 4, 5, 6 }

// 차집합
const differ = [...A].filter(x => !B.has(x));
console.log(differ); // [1, 2]
