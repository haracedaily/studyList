const str = "http://www.naver.com?a=이용모";
const encur = encodeURI(str);
const decur = decodeURI(encur);

console.log(encur);
console.log(decur);

const encCompur = encodeURIComponent(encur);
const decCompur = decodeURIComponent(decur);

console.log(encCompur);
console.log(decCompur);