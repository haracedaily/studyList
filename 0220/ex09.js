//모든 요소에 2를 곱하고 짝수들의 총합을 구해라

const numbers = [1,2,3,4,5,6];
var sum =0 ;
console.log(numbers.map(el=>el*2).reduce((a,b)=>a+b));