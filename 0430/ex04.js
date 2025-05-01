(async () =>{
console.log("즉시함수 호출");
const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
let res;
if(result.status !== 404) res = await result.json();
console.log(res);
})()
