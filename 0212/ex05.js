var a;
var b = a?? '기본문자열';

console.log(b);

var c = '';
var d = c??'기본문자열';

console.log(`d = ${d}`);

var e = {value:''};
var f = c?.value;

console.log(`f = ${f}`);

