//for일반
//forEach() 반환값 없음 ==> 실행 후 안 담긴다.
//map() 반환값 있음 ==> 실행 후 담긴다.

const arr = [1,2,3,4,5];
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//반환값이 없는 forEach
let result = arr.forEach(el=>{console.log(el); return el;});
console.log(result);

//반환값이 없는 map
result = arr.map(el=>{console.log(el);return el;});
console.log(arr);
console.log(result);