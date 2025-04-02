const num = 10.25;

//반올림해서 문자열로 만들어주는 함수
//원시값 primitive => 객체(wrapper)형태로 변경해서 함수 사용
const result = num.toFixed(1);

console.log(typeof result);

console.log((0.1+0.2));
console.log((0.1+0.2)==0.3);
console.log(Number.EPSILON);
console.log((0.1+0.2)-0.3<Number.EPSILON);

