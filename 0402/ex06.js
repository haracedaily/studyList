const str = 'a123bc123@naver.com';
const re = /^[A-Za-z]{1}[A-Za-z0-9]+\@[A-Za-z]+\.[A-Za-z]+$/;

const arr = str.match(re);

console.log(arr);