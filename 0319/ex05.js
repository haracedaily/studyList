// string -> object
// sessionStorage localStroage 사용할 때
//JSON.parse()사용
const aa = '{"a":"10","b":"20"}';

const obj = JSON.parse(aa);
console.log(obj.a);
console.log(obj.b);
//object -> String 변경
//JSON.stringify() 사용